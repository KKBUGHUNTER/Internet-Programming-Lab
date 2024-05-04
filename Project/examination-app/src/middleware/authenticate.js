const authenticate = (req, res, next) => {
    const userID = req.cookies.userID;

    if (userID) {
        // Perform authentication logic (e.g., check if user exists)
        // If authentication succeeds, call next()
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
