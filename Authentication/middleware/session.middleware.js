export const validate = (req, res)=>{
    if (!req.session.userID) {
        return res.status(401).json({
            message: "Unathorized"
        })
    }
}