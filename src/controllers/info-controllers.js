const info = (req, res) => {
    res.json({
        success: true,
        message: "Api is  live",
        error: {},
        data: {}
    })
}
module.exports = { info };