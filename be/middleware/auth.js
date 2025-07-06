import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    //Step1: get token from headers
    const { token } = req.headers;

    if (!token) {
        return res.json({
            success: false,
            msg: 'Not authorized login again'
        });
    }

    try {

        //Step2: verify and decode it
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

        if (decodeToken.id) {

            //Step3: extract userID or username
            req.body.userID = decodeToken.id
        } else {
            return res.json({
                success: false,
                msg: 'Not authorized login again'
            })
        }
        next();

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            msg: error.msg
        });
    }
}