import createHttpError from 'http-errors'
import User from '../../models/User.js'

export default async(req,res,next) => {
    try{
        let all = await User.find()
        if(all.length > 0){
            return res.status(200).json({
                response:all,
                success:true,
                message:'you have requested GET /api/user/',
                date: new Date()
            })
        }
        else{
            return next(createHttpError(404, 'Not found users'))
        }
    }
    catch(error){
        next(error)
    }
}