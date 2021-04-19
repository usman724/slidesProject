const { body, validationResult } = require('express-validator');
const mysql = require('mysql');
const connection = require('../../dbConnection');


exports.postUserDate = (req, res) => {
    const errors = validationResult(req);
    const { username, email, address, phone, type } = req.body;
    let typearray = ["business", "personal"]
    let errs = 0;

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    connection.query('INSERT INTO `user`( `name`, `email`, `address`, `phone`, `type` ) VALUES (?,?,?,?,?)',
        [username, email, address, phone, type]
        , (error, results, fields) => {
            if (error) throw error;
            typearray.map(data => {
                if (type === data) {
                    errs++;
                    res.status(200).json({
                        "username": username,
                        "email": email,
                        "phone": phone,
                        "address": address,
                        "type": type,
                        "id": results.insertId,
                        request: {
                            "Type": "Post",
                            "url": (type === "business") ? 'http://localhost:5000/user/businessAccount/' + results.insertId : 'http://localhost:5000/user/personalAccount/' + results.insertId,
                            "Payload": (type === "business") ? 'businessType: Public/Private' : 'categories : Intrested'
                        }
                    })
                    return;
                }
            })

            if (errs == 0) {
                res.status(400).json({
                    "Error ": "Must be personal/ business",
                })
            }
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
                "type":"Get",
                 "url" :"http://localhost:5000/user/50",
                 "Message" :"Check Updated Data At this link"
            }
        })
    })

}
