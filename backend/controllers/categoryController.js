const client = require("../db");
const db = client.db("online-store");
const myColl = db.collection("aproducts");
async function getCategory(req, res) {
    try {
        const {order} = await req.params
        const result = await myColl.find()
        await result.sort({price: (order === 'asc' ? 1 : -1)})
        const data = await result.toArray()
        return res.send(data)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = { getCategory }