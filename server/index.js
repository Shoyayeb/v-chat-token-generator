const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const makeToken = (email) => {
    const expirationDate = new Date();
    expirationDate.setHours(new Date().getHours() + 1);
    return jwt.sign({ email, expirationDate }, process.env.JWT_SECRET_KEY);
};

app.get("/", (req, res) => {
    res.send(`server running on ${port}`)
});
app.listen(port, () => {
    console.log(`Server running on -`, `http://localhost:${port}`);
    console.log(makeToken("shafin"));
})