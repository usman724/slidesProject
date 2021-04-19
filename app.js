const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')



const app = express()

// const ProductRoutes = require('./api/routes/product')
// const OrderRoutes = require('./api/routes/order')
const UserRoutes = require('./api/routes/user')
const CategoriesRoutes = require('./api/routes/categories')
//db Connection with mysql




// app.use((req,res,next)=>{
//     res.status(200).json({
//         "message" : " its  worked !"
//     })
// })

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin ,X-Requested-With ,Content-Type ,Accept , Authorization")
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "*")
        return res.status(200).json({})
    }
    next();
})



app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.use('/product', ProductRoutes)
// app.use('/order', OrderRoutes)

app.use('/user', UserRoutes)


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
