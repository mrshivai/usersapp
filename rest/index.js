const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const conn = require("./db");

conn.on("connected", () => {
    console.log("Connected to MongoDB!");
});

conn.on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application with an error code
});

app.use(cors());
app.use (express.json());


// Middleware
app.use(express.urlencoded ({
extended: false }));
app.use(
cors({
origin: ["http://localhost:3000", "https://userappff.onrender.com"],
})
);

//routes
app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log("Server Is Running On Port: " + PORT));
