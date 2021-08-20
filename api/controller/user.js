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
               
                }
            );;
        }
    });
}


// add user user 
exports.postUserDate = (req, res) => {
    const errors = validationResult(req);
    // const { username, email, password, phone, type } = req.body;
    let emttystring=12;
    const { username,email, password } = req.body;

    console.log(`user :  ${username}  email:   ${email} pass:  ${password}`);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    connection.query(`INSERT INTO user(username, name, email,password, bio, photo, phone, community, country, type, new, varify, whereuse, maingoal) VALUES ( '${username}','${emttystring}','${email}','${password}','${emttystring}','${emttystring}','${emttystring}','${emttystring}','${emttystring}','${emttystring}',"true",1,'${emttystring}','${emttystring}')`, (error, results, fields) => {
            if (error) throw error;

         sendVarificationEmail(email, `http://slidesmare.com/api/varification_Account/${results.insertId}`);

               res.send(200);

            

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
            res.render('new_login_signup.ejs', {
                err: "User Does not exits"
            });
        }

        else if (results[0].varify == 0) {

            console.log(`log ${results[0].varify}`);
            res.render('new_login_signup.ejs', {
                err: "Please Varify Account !!"
            });
        } 
         else if (results[0].whereuse.length >3) {

            console.log(`log ${results[0].whereuse}`);

            connection.query(`select * from user_slide  where user_id =${results[0].id} AND folder_id=0`,
            (error, resultsfolderslide, fields) => {
                if (error) throw error;
            
            
                connection.query(`select * from user_folder  where user_id =${results[0].id}`,
                (error, resultsfolder, fields) => {
                    if (error) throw error;
                
                    let user = {
                        email,
                        id: results[0].id
                    }

                res.render('my-presentation.ejs', {
                    totalslide: resultsfolderslide,
                    folder:resultsfolder ,
                    "user": user
                });
            
                })    
            
            });
          
        } 

        else {
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
    res.render('new_login_signup.ejs');
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
            return res.status(200);
        }
    });
}


//Forget password 
exports.forgetPassword = (req, res) => {
    const { email } = req.body;
    console.log(email);
    connection.query(`SELECT password FROM user where email='${email}'`, 
    (error, results, fields) => {
        if (error) throw error;
   sendMailtoiuser(email, results[0].password);
        console.log(results);
        console.log(email, results[0].password);
        res.status(200);
   
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
                    url: "https://lizamaids.com/api/login",
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
                    res.render('account_verify.ejs');
                });
        }
    });
}




exports.openpage = (req, res) => {

    res.render('new_login_signup.ejs');
}

// updatewhereuse



exports.updatewhereuse = (req, res) => {

    // res.render('new_login_signup.ejs');
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
                    url: "http://slidesmare.com/api/login",
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

                    connection.query(`select * from user_slide  where user_id =${Userid} AND folder_id=0`,
                        (error, resultsfolderslide, fields) => {
                            if (error) throw error;
                        
                        
                            connection.query(`select * from user_folder  where user_id =${Userid}`,
                            (error, resultsfolder, fields) => {
                                if (error) throw error;
                            
                              
                            res.render('my-presentation.ejs', {
                                totalslide: resultsfolderslide,
                                folder:resultsfolder
                            });
                        
                            })    
                        
                        });

                });
        }
    });
    

}




exports.openpageedit = (req, res) => {

    const parsed = url.parse(req.url);
    const query  = querystring.parse(parsed.query);


    // console.log(` UserId : ${query.userid} and FolderID :${query.folder_id}`);

    connection.query(`SELECT * FROM user_folder_slide where user_id=${query.userid}
     AND  folder_id =${query.folder_id} AND presentation_id=${query.slide_id}`, 
    (error, results, fields) => {
        if (error) throw error; 
        res.render('edit-new-first.ejs',{
            results: results ,
            currentFolder : query.folder_id,
            CurrentUserid: query.userid,
            PresentMode: query.present
        });

        
    });

   // res.render('edit-new-first.ejs');
}



exports.opendashboard = (req, res) => {



    const {Userid} = req.params;

    connection.query(`select * from user_slide  where user_id =${Userid} AND folder_id=0`,
    (error, resultsfolderslide, fields) => {
        if (error) throw error;
    
    
        connection.query(`select * from user_folder  where user_id =${Userid}`,
        (error, resultsfolder, fields) => {
            if (error) throw error;
        
          
        res.render('my-presentation.ejs', {
            totalslide: resultsfolderslide,
            folder:resultsfolder
        });
    
        })    
    
    });

}





// createFolder

exports.createFolder = (req, res) => {

    const { id, folderName } = req.body;

    connection.query('INSERT INTO `user_folder`(`routerFolder`,`user_id`, `folder_name`) VALUES (?,?,?)',
        [0,id, folderName]
        , (error, results, fields) => {
            if (error) throw error;

            connection.query(`select * from user_slide  where user_id =${id} AND folder_id=0`,
            (error, resultsfolderslide, fields) => {
                if (error) throw error;
            
            
                connection.query(`select * from user_folder  where user_id =${id}`,
                (error, resultsfolder, fields) => {
                    if (error) throw error;
                
                  
                res.render('my-presentation.ejs', {
                    totalslide: resultsfolderslide,
                    folder:resultsfolder
                });
            
                })    
            
            });

        })

}


// Create Single Presentation with the without folder
//createPresentation
exports.createPresentation = (req, res) => {

    const { id, folder_id_for_send,presentation_name,presentation_link } = req.body;

    connection.query('INSERT INTO `user_slide`(`user_id`,`folder_id`,`slide_name`,`slide_link_share`) VALUES (?,?,?,?)',
        [id, folder_id_for_send,presentation_name,presentation_link]
        , (error, results, fields) => {
            if (error) throw error;

                connection.query(`select * from user_slide  where user_id =${id} AND folder_id=0`,
                (error, resultsfolderslide, fields) => {
                    if (error) throw error;
                
                
                    connection.query(`select * from user_folder  where user_id =${id}`,
                    (error, resultsfolder, fields) => {
                        if (error) throw error;
                    
                      
                    res.render('my-presentation.ejs', {
                        totalslide: resultsfolderslide,
                        folder:resultsfolder
                    });
                
                    })    
                
                });



        })

}


// Open Sepecific Folder
// Api -> openFolder



exports.openFolder = (req, res) => {

    const { userid,folder_id_open  } = req.body;
console.log(`select * from user_slide  where folder_id=${folder_id_open} AND user_id=${userid}`);
    connection.query(`select * from user_slide  where folder_id=${folder_id_open} AND user_id=${userid}`,
    (error, resultsfolder, fields) => {
        if (error) throw error;
        res.render('my-presentation.ejs', {
            totalslide: resultsfolder,
            folder:"",
            slideinFolder:folder_id_open
        });
    });
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
