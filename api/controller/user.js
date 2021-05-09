const { body, validationResult } = require('express-validator');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const connection = require('../../dbConnection');
const fetch = require("node-fetch");
var nodemailer = require('nodemailer')
const querystring = require('querystring');
const url = require('url');

function sendVarificationEmail(too, pass) {



    var transporter = nodemailer.createTransport({
        service: 'gmail',
        //   ADD EMAIL AND PASSWORD (GOOGLE ACCOUNT - > SECURITY -> APP PASSWORD - > select app + select device => generate)
        auth: {
            user: 'usman@softgates.ae',
            pass: 'rckhmxiharesweya'
        }
    });

    var mailOptions = {
        from: 'usman@softgates.ae',
        to: too,
        subject: 'Account Varification',
        text: `Click link to Varify Account :  " ${pass}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(401).send(error);
        } else {
            return res.status(200).send(
                {
                    Result: "Email Send Successfully",
                    // Subject : req.body.subject,
                    // Message : req.bod.message,
                    // From : req.body.from ,
                    // To :  req.body.to
                }
            );;
        }
    });
}


// add user user 
exports.postUserDate = (req, res) => {
    const errors = validationResult(req);
    // const { username, email, password, phone, type } = req.body;
    const { username, email, password } = req.body;

    console.log(`user :  ${username}  email:   ${email} pass:  ${password}`);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    connection.query('INSERT INTO `user`(  `username` ,`email` , `password` , `new` ,`varify`) VALUES (?,?,?,"true",0)',
        [username, email, password]
        , (error, results, fields) => {
            if (error) throw error;



            sendVarificationEmail(email, `http://localhost:1900/api/varification_Account/${results.insertId}`);

            res.render('log-sign-up.ejs', {
                "email": email,
                // "phone": phone,
                "password": password,
                // "type": type,
                "id": results.insertId,
                message: "Please Varify Account!"
            });

            // res.status(200).json({
            //     // "username": username,

            //     // request: {
            //     //     "Type": "Post",
            //     //     "url": (type === "seller") ? 'http://localhost:1700/api/businessAccount/' + results.insertId : 'http://localhost:1700/api/personalAccount/' + results.insertId,
            //     //     "Payload": (type === "buyer") ? 'businessType: Public/Private' : 'categories : Intrested'
            //     // }
            // })



        });
}
// login user 
exports.loginUser = (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    connection.query(`SELECT * FROM user WHERE email='${email}' AND password='${password}'`, (error, results, fields) => {
        if (error) throw error;
        if (results.length == 0) {
            res.render('log-sign-up.ejs', {
                err: "User Does not exits"
            });
        }

        else if (results[0].varify == 0) {

            console.log(`log ${results[0].varify}`);
            res.render('log-sign-up.ejs', {
                err: "Please Varify Account !!"
            });
        } else {
            let user = {
                email,
                id: results[0].id
            }

            var token = jwt.sign({ user }, 'as23das', { expiresIn: '1hr' },);





            res.render('welcome.ejs', {
                "user": user
            });
        }


    });
}
// Open login page

// openlogin


exports.openlogin = (req, res) => {
    res.render('log-sign-up.ejs');
}




// completeProfile

exports.completeProfile = (req, res) => {
    const errors = validationResult(req);
    const { name, username, bio, community, country, photo } = req.body;
    const { userid } = req.params;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    connection.query(`UPDATE user SET username='${username}' , name='${name}' , community='${community}' , country='${country}' , bio='${bio}'  , new='${false}'  where id =${userid}`,
        (error, results, fields) => {
            if (error) throw error;
            res.status(200).json({
                message: "Record Updated!"
            })
        });
}


function sendMailtoiuser(too, pass) {
    console.log('send-verification-email');


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        //   ADD EMAIL AND PASSWORD (GOOGLE ACCOUNT - > SECURITY -> APP PASSWORD - > select app + select device => generate)
        auth: {
            user: 'usman@softgates.ae',
            pass: 'rckhmxiharesweya'
        }
    });

    var mailOptions = {
        from: 'usman@softgates.ae',
        to: too,
        subject: 'Forget Password',
        text: `Your Account Password " ${pass}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(401).send(error);
        } else {
            return res.status(200).send(
                {
                    Result: "Email Send Successfully",
                    // Subject : req.body.subject,
                    // Message : req.bod.message,
                    // From : req.body.from ,
                    // To :  req.body.to
                }
            );;
        }
    });
}




//Forget password 
exports.forgetPassword = (req, res) => {
    const { email } = req.body;
    console.log(email);
    connection.query(`SELECT password FROM user where email='${email}'`, (error, results, fields) => {
        if (error) throw error;
        sendMailtoiuser(email, results[0].password);
        console.log(results);
        console.log(email, results[0].password);
        res.render('log-sign-up.ejs');
    });
}


//varify User Account ..

exports.varifyAccount = (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM user where id='${id}'`, (error, results, fields) => {
        if (error) throw error;
        // sendMailtoiuser(email,results[0].password);
        // console.log(email,results[0].password);
        if (results.length == 0) {
            res.status(400).json({
                "Message": "No User Exits",
                request: {
                    Method: "POST",
                    url: "http://localhost:1900/api/login",
                    payload: {
                        "Email": "Email Address",
                        "Password": "Security Purpose"
                    }
                }
            });
        } else {
            connection.query(`UPDATE user SET varify=1  where id =${id}`,
                (error, results, fields) => {
                    if (error) throw error;


                    // res.status(200).json({
                    //     message: "Successfully Varifed !"
                    // })
                    res.render('my-profile.ejs');
                });
        }
    });
}




exports.openpage = (req, res) => {

    res.render('log-sign-up.ejs');
}

// updatewhereuse



exports.updatewhereuse = (req, res) => {

    // res.render('log-sign-up.ejs');
    const { Userid, whereuse, setgoal } = req.body;
    console.log(`User id  ${Userid} and where use ${whereuse}`);

    connection.query(`SELECT * FROM user where id='${Userid}'`, (error, results, fields) => {
        if (error) throw error;
        // sendMailtoiuser(email,results[0].password);
        // console.log(email,results[0].password);
        if (results.length == 0) {
            res.status(400).json({
                "Message": "No User Exits",
                request: {
                    Method: "POST",
                    url: "http://localhost:1900/api/login",
                    payload: {
                        "Email": "Email Address",
                        "Password": "Security Purpose"
                    }
                }
            });
        } else {
            connection.query(`UPDATE user SET whereuse='${whereuse}' , maingoal='${setgoal}' where id =${Userid}`,
                (error, results, fields) => {
                    if (error) throw error;

                    connection.query(`select * from user_folder  where user_id =${Userid}`,
                        (error, resultsfolder, fields) => {
                            if (error) throw error;
                            res.render('my-presentation.ejs', {
                                folder: resultsfolder
                            });
                        });
                });
        }
    });


}




exports.openpageedit = (req, res) => {

    const parsed = url.parse(req.url);
    const query  = querystring.parse(parsed.query);

    // console.log(` UserId : ${query.userid} and FolderID :${query.folder_id}`);
    connection.query(`SELECT * FROM user_folder_slide where user_id=${query.userid} AND  folder_id =${query.folder_id}`, 
    (error, results, fields) => {
        if (error) throw error; 
        res.render('edit-new-first.ejs',{
            results: results ,
            currentFolder : query.folder_id ,
            CurrentUserid: query.userid
        });

        
    });

   // res.render('edit-new-first.ejs');
}






// createFolder

exports.createFolder = (req, res) => {

    const { id, folderName } = req.body;

    connection.query('INSERT INTO `user_folder`(`user_id`, `folder_name`) VALUES (?,?)',
        [id, folderName]
        , (error, results, fields) => {
            if (error) throw error;

            connection.query(`select * from user_folder  where user_id =${id}`,
                (error, resultsfolder, fields) => {
                    if (error) throw error;
                    res.render('my-presentation.ejs', {
                        folder: resultsfolder
                    });
                });

        })

}


exports.getUserData = (req, res) => {
    connection.query('SELECT * FROM `user`', (error, results, fields) => {
        if (error) throw error;
        res.status(200).json({
            "Data": results
        })
    });
}

exports.getAllUserData = (req, res) => {
    connection.query(`SELECT * FROM user Where id = ${req.params.id}`, (error, results, fields) => {
        if (error) throw error;
        res.status(200).json({
            "Data": results
        })
    });
}
exports.postBusinessAccount = (req, res) => {
    const errors = validationResult(req);
    const userId = req.params.id;
    const businessType = req.body.businessType;


    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    connection.query('INSERT INTO `business_account`(`user_id`, `businessType`) VALUES (?,?)',
        [userId, businessType]
        , (error, results, fields) => {
            if (error) throw error;
            res.status(200).json({
                "Messge": "Account  Created"
            })
        })



}
exports.postPersonalAccount = (req, res) => {
    const errors = validationResult(req);
    const userId = req.params.id;
    const categories = req.body.categories;


    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    connection.query('INSERT INTO `personal_account`(`user_id`, `categories`) VALUES  (?,?)',
        [userId, categories], (error, results, fields) => {
            if (error) throw error;
            res.status(200).json({
                "Messge": "Account  Created",
                request: {
                    Type: "Get",
                    "url": "http://localhost:5000/user/" + categories,
                    "Message": "This will return same categories User"
                }
            })
        })



}
exports.EditeAccount = (req, res) => {

    const { name, email, address, phone } = req.body;
    let arraydata = [];

    let query = "UPDATE `user` SET ";

    if (name) {
        let nameds = `name = '${name}'`
        arraydata.push(nameds)
    }
    if (email) {
        let emails = `email = '${email}' `
        arraydata.push(emails)
    }
    if (address) {
        let addressstring = `address = '${address}' `
        arraydata.push(addressstring)
    }
    if (phone) {
        let phonenumber = `phone = '${phone}' `
        arraydata.push(phonenumber)
    }

    console.log(arraydata.length);

    for (let index = 0; index < arraydata.length; index++) {

        let data = arraydata[index];
        query += data;
        if (index != arraydata.length - 1) {

            query += ",";
        }


    }

    query += `Where id=${req.params.id}`

    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        res.status(200).json({
            "Messge": "Account  Updated",
            request: {
                "type": "Get",
                "url": "http://localhost:5000/user/50",
                "Message": "Check Updated Data At this link"
            }
        })
    })

}
