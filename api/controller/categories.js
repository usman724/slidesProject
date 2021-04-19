const connection = require('../../dbConnection');

exports.SearchByCategories = (req, res) => {
    const categories = req.params.categories;
    let arrayofdata = [];
    let count = 0;
    connection.query(`SELECT user_id,categories FROM personal_account where categories = '${categories}' `,
        (error, results1, fields) => {
            if (error) throw error;
            results1.map(data => {
                connection.query(`SELECT * FROM user where id = ${data.user_id} `,
                    (error, results, fields) => {
                        if (error) throw error;
                        count++;
                        arrayofdata.push(results);
                        if (count == results1.length) {
                            console.log(count == results1.length);
                            count = 0;
                            res.status(200).json({
                                "data": arrayofdata.map(data => {
                                    return (data)
                                })
                            })

                        }

                    })
            })


        })
}