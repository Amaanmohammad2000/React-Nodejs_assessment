require("dotenv").config();
const PORT = 3000;
const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(process.env.DB)
.then(() => console.log("Connected to DB..."))
.catch(() => console.log("Error while connecting to DB"))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})