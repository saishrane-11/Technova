import jwt from 'jsonwebtoken'


const authUser = async (req, res, next) => {


    const authHeader = req.headers.authorization;
    // Check if the Authorization header is present and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Token is missing.' });
      }
  
      // Extract the token (everything after "Bearer ")
    const token = authHeader.split(' ')[1];
  
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}


export default authUser;