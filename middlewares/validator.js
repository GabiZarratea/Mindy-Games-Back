const validator = (schema) => [

    //validate: valida el body
    //abortEarly: false realiza todas las validaciones
     //en caso contrario devuelve cada una de las validaciones

    (req, res, next) => {
        const validation = schema.validate(req.body,{abortEarly: false})
        if(validation.error) {                                          
            return res.status(400).json({                              
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }
        return next();
    }
];

export default validator;