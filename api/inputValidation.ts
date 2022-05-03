import Joi from "joi";

interface inputObject {
    username?: string;
    password?: string;
    repeatPassword?: string;
    birthYear?: number;
    email?: string;
    defaultString?: string;
};


export const inputValidate = ( inputObject: inputObject ) => {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .messages({
                'string.base': `"username" should be a type of 'text'`,
                'string.empty': `"Přihlašovací jméno" nesmí být prázdné`,
                'string.min': `"Přihlašovací jméno" musí být minimálně dlouhé: {#limit} znaky`,
                'string.max': `"Přihlašovací jméno" musí být maximálně dlouhé: {#limit} znaky`
              }),
    
        password: Joi.string()
            .min(6)
            .max(60)
            .pattern(new RegExp('^[a-zA-Z0-9(.,#?!@&*$:)]{0,}$'))
            .trim()
            .messages({
                'string.base': `"username" should be a type of 'text'`,
                'string.empty': `"Heslo" nesmí být prázdné`,
                'string.min': `"Heslo" musí být minimálně dlouhé: {#limit} znaky`,
                'string.max': `"Heslo" musí být maximálně dlouhé: {#limit} znaky`,
                'string.pattern.base': `"Heslo" nesmí obsahovat zakázané znaky`
              }),
    
        repeatPassword: Joi.ref('password'),
        
        birthYear: Joi.number()
            .integer()
            .min(1900)
            .max(2013),
    
        email: Joi.string()
            .email({ minDomainSegments: 2 })
            .messages({
                'string.empty': `"Email" nesmí být prázdný`,
                'string.email': `"Email" není platný`
            }),

        defaultString: Joi.string()
            .messages({
                'string.empty': `nesmí být prázdný`,
            })
    });
    
    const { error, value } = schema.validate( inputObject );
    if (error) {
        return [ error.message, value ]
    } else {
        return [ "", value ]
    }
    
}