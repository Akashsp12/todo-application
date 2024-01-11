const user = require('../Schema/userSchema')
exports.postuser = async (req, res) => {
    const a = new user({
        Name: 'akash',
        Provider: "google"
    })
    // await a.save()
}