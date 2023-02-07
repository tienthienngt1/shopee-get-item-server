const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

app.use(cors());

app.get("", (_req, res) => {
	res.send("hello world");
});

app.get("/about", (req, res) => {
	res.json(200, { ...req.query });
});

app.get("/item/get", async (req, res) => {
	const response = await axios.get(
		`https://shopee.com.br/api/v4/item/get?itemid=${req.query.itemid}&shopid=${req.query.shopid}`,
		{ headers: { "af-ac-enc-dat": "null" } }
	);
	res.json(200, { ...response.data });
});

app.listen(4400);
