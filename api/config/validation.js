
const { validationResult, body, check } = require('express-validator');

// const resultsValidator = (req) => {
//     const messages = []
//     if (!validationResult(req).isEmpty()) {
//       const errors = validationResult(req).array()
//       for (const i of errors) {
//         messages.push(i)
//       }
//     }
//     return messages
//   }

// const errors = resultsValidator(req)
//   if (errors.length > 0) {
//     return res.status(400).json({
//       method: req.method,
//       status: res.statusCode,
//       error: errors
//     })
//   }


//  `email`, `address`, `phone`, `type`

exports.CreateAccountValidation = () => {
    return [
        // check('username')
        //     .notEmpty()
        //     .withMessage('username not define')
        //     ,
        check('email')
            .isEmail()
            .withMessage('Email  is required')
        ,
        check('password')
            .notEmpty()
            .withMessage('password is required')
        // ,    
        // check('type')
        //     .notEmpty()
        //     .withMessage('Mention Account Type ')
        //     ,
        // check('phone')
        //     .notEmpty()
        //     .withMessage('phone is required')
    ]
}



exports.loginAccountValidation = () => {
    return [
        check('email')
            .isEmail()
            .withMessage('Email  is required')
        ,
        check('password')
            .notEmpty()
            .withMessage('address is required')

    ]
}

exports.completeProfileAccountValidation = () => {
    return [
  
        check('username')
            .notEmpty()
            .withMessage('username is required')
        ,
        check('bio')
            .notEmpty()
            .withMessage('bio is required')

        ,
        check('community')
            .notEmpty()
            .withMessage('Select community ')

        ,
        check('country')
            .notEmpty()
            .withMessage('Select country ')
    ]
}




exports.BusinessAccountValidation = () => {
    return [
        check('businessType')
            .notEmpty()
            .withMessage('businessType not define (Public / Private )')
    ]

}

exports.PersonalAccountValidation = () => {
    return [
        check('categories')
            .notEmpty()
            .withMessage('categories not define (Intrested)')
    ]

}
exports.categoriesValidation = () => {
    return [
        check('categories')
            .notEmpty()
            .withMessage('categories not define (Intrested)')
    ]

}
exports.userdatavalidation = () => {
    return [
        check('id')
            .notEmpty()
            .withMessage('ID not define ')
    ]

}