import jwt from 'jsonwebtoken'


const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(1)
        // Check if the Authorization header is present and starts with "Bearer "
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Token is missing.' });
          }
      console.log(2)
          // Extract the token (everything after "Bearer ")
        const token = authHeader.split(' ')[1];
          
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized admin Login Again' })
        }
        console.log(token)
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        
        console.log(tokenDecode)
        if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized admin  Login Again" })
        }
        console.log(5)
        next()
        console.log(6)
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth;