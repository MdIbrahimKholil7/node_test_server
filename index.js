const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.json({ message: "Success" })
})
app.listen(5000, () => { console.log("Server listening on port 5000") })