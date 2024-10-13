const express = require("express");
const app = express();
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.json({ message: "Message from server" });
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port 5000");
});
