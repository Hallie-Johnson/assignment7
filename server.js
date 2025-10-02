import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/say", async (req, res) => {
	const keyword = req.query.keyword || "";
	const response = await axios.get(
		`https://9m3rc54lzj.execute-api.us-east-2.amazonaws.com/say`,
		{ params: { keyword } }
	);
	res.json(response.data);
});

app.get("/", (req, res) => {
	res.send("Assignment 07 API running!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
