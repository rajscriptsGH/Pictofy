import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    //Step1: get token from headers
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({
            success: false,
            msg: 'Not authorized login again'
        });
    }

    try {

        //Step2: verify and decode it
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

        if (decodeToken?.id) {

            //Step3: extract userID or username
            req.userId = decodeToken.id
            next();
        } else {
            return res.status(401).json({
                success: false,
                msg: 'Invalid token'
            })
        }

    } catch (error) {
        console.log("auth error", error);

        return res.status(401).json({
            success: false,
            msg: 'Invalid token'
        })
    }
}