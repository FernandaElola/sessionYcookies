module.exports = (req, res, next) => {
    if(req.cookies.bgColor){
        req.cookies.bgColor = req.session.bgColor
    }
    next()
}

