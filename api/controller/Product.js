const mysql = require('mysql');
const connection = require('../../dbConnection');


exports.add_product = (req, res) => {
    console.log("add_product");

    const { sellerID, pname, pdetail, categorie, pprice } = req.body;

    connection.query(`INSERT INTO product(seller_id, p_name, p_detail,categorie,p_price) VALUES ( ${sellerID} , '${pname}' ,'${pdetail}' ,'${categorie}', '${pprice}' )`,
        (errors, result) => {
            if (errors) {
                res.json({ 'status': 500, 'msg': errors })
            }
            else {
                res.json({ 'status': 200, 'msg': 'Product Added Successfulyy ' })
            }
        }
    )
}



exports.delete_product = (req, res) => {
    console.log("delete_product");
    const { id } = req.params;
    // id : Product id want to delete.
    connection.query(`DELETE FROM product WHERE p_id = ${id}`, (errors, result) => {
        if (errors) {
            res.json({ 'status': 500, 'msg': errors })
        }
        if (result.affectedRows < 1) {
            res.json({ 'status': 200, 'msg': 'No Product Exits' })
        }
        else {
            console.log();
            res.json({ 'status': 200, 'msg': 'Deleted Product', data: result })
        }
    }
    )
}



exports.get_product_by_seller = (req, res) => {

    console.log("get_product_by_seller");
    const { id } = req.params;
    let productIdArray = [];
    let dataarray = [];
    // id : Selller_id

    connection.query(`SELECT * FROM product WHERE seller_id = ${id}`, (errors, result) => {
        if (errors) {
            res.json({ 'status': 500, 'msg': errors })
        }
        if (result.affectedRows < 1) {
            res.json({ 'status': 200, 'msg': `No Product Exit With this seller Id :  ${id} ` })
        }
        else {

            result.map((da, i) => {
                console.log(da.p_id, i);
                productIdArray.push(da.p_id);
                connection.query(`SELECT rating FROM product_rating  WHERE p_id = ${da.p_id}`, (errors, resultdata) => {
                    dataarray.push({ "rating": resultdata, data: result[i] });
                })
            })

            connection.query(`SELECT * FROM product_rating  WHERE p_id = ${[productIdArray]}`, (errors, resultdata) => {
                res.json({
                    'status': 200,
                    'msg': 'Product',
                    "Total Product": result.length,
                    data: dataarray
                })
            })
        }
    }
    )
}




exports.get_product_by_seller_categorie = (req, res) => {

    console.log("get_product_by_seller");
    const { sellerid, categories } = req.params;
    // id : Selller_id
    let productIdArray = [];
    let dataarray = [];
    connection.query(`SELECT * FROM product WHERE seller_id = ${sellerid} AND categorie='${categories}' `, (errors, result) => {

        if (errors) {
            res.json({ 'status': 500, 'msg': errors })
        }
        if (result.affectedRows < 1) {
            res.json({ 'status': 200, 'msg': `No Product Exit With this seller Id :  ${id} ` })
        }
        else {

            result.map((da, i) => {
                console.log(da.p_id, i);
                productIdArray.push(da.p_id);
                connection.query(`SELECT rating FROM product_rating  WHERE p_id = ${da.p_id}`, (errors, resultdata) => {
                    dataarray.push({ "rating": resultdata, data: result[i] });
                })
            })

            connection.query(`SELECT * FROM product_rating  WHERE p_id = ${[productIdArray]}`, (errors, resultdata) => {
                res.json({
                    'status': 200,
                    'msg': 'Product',
                    "Categories": categories,
                    "Total Product": result.length,
                    data: dataarray
                })
            })
        }


    }
    )
}



