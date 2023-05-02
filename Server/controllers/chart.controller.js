module.exports.chart = (req,res) => {
    res.status(201).json({username : req.user})
}