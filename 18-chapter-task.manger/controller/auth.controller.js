export const login = (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({
            error: "username is required"
        });
    }

    req.session.user = { username };

    res.cookie("username", username, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    });

    res.status(200).json({
        message: `${username} logged in`
    });
};

export const logout = (req , res)=>{
    res.clearCookie("username");
    res.clearCookie("connect.sid");

    req.session.destroy((err)=>{
        if (err) {
            return res.status(500).json({error: "SOmething went wrong"})
        }
         res.status(200).json({
            message: "Logged out successfully"
        });
    })
}