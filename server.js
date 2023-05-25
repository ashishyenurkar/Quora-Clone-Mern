const express = require("express");
const cors = require("cors");
const path = require("path")
const app = express();
const bodyParser = require("body-parser");

const PORT = 8080;

const db = require("./db");
const router = require("./routes")

//DatabaseConnecton.
db.connect()

//middle-ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "*")
    next()
});

//routes
app.use('/api', router);


app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/uploads", express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    try {
        // res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
        res.send("Hello this is home page")
    } catch (e) {
        res.send("Oops! unexpected error");
    }
});

app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listining on port no ${PORT}`)
});
