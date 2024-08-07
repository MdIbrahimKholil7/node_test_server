const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.json({ message: "Message from server" })
})
app.listen(5000, () => { console.log("Server listening on port 5000") })