const user = require('../Schema/userSchema')
const bcrypt = require('bcrypt');
exports.postuser = async (req, res) => {
    console.log(req.body)

    const myPlaintextPassword = "akash23"
    const salt = 10
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    console.log(hash)

   const a= bcrypt.compareSync(myPlaintextPassword, "$2b$10$Zt0n1IKVog7M20ibvSV14emv8zlUcUhhQmf64lwbZ4ATdijW1lsfK"); 
   console.log(a)

    res.send({ status: "okj" })
    // const a = new user({
    //     Name: 'akash',
    //     Provider: "google"
    // })
    // await a.save()
}