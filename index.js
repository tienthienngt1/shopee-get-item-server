const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();

app.get("", (_req, res) => {
	res.send("hello world");
});

app.get("/about", (req, res) => {
	res.json(200, { ...req.query });
});

app.get("/item/get", async (req, res) => {
	const response = await axios.get(
		`${process.env.BASE_API_URL}item/get?itemid=${req.query.itemid}&shopid=${req.query.shopid}`,
		{ headers: { "af-ac-enc-dat": "null" } }
	);
	res.json(200, { data: response.data });
});

app.listen(3000);
