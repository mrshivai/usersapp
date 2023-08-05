const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000 || process.env.PORT;
const conn = require("./seed/seeds");

conn.on("connected ", () => {
 console.log("Connected to MongoDB! ");
});

app.use(express.json());
app.use(cors());



//routes
app.use( "/users", require("./routes/users")) ;

app.listen(PORT, () => console.log("Server Is Running On Port: " + PORT));