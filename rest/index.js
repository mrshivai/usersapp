const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require("./db");

conn.on("connected", () => {
    console.log("Connected to MongoDB!");
});

conn.on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application with an error code
});

app.use(express.json());
app.use(cors());

//routes
app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log("Server Is Running On Port: " + PORT));
