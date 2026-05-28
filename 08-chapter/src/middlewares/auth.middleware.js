const jwt = require("jsonwebtoken")

async function authArtist(req, res, next) {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({message: "unauthorized"})
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT)

        if(decoded.role !== "artist"){
            return res.status(403).json({ message: "You dont have excess"})
        }
        req.user = decoded;
        next()
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized"})
        
    }
}

module.exports = { authArtist};