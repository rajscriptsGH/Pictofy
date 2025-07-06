import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    
    const { token } = req.headers;

    if (!token) {
        return res.json({
            success: false,
            msg: 'Not authorized login again'
        });
    }

    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

        if (decodeToken.id) {
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