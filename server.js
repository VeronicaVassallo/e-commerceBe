const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 5050;

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error during db connection"));
db.once("open", () => {
	console.log(`Dtabase successfully connected!`);
});

app.listen(PORT, () => {
	console.log(`Server is running on Port :${PORT}`);
});
