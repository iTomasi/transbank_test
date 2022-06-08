const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const { WebpayPlus, IntegrationCommerceCodes, IntegrationApiKeys, Environment, Options } = require("transbank-sdk");

const app = express();

app.set("port", 4000);
app.use(cors());

app.get("/webpay/create", async function(req, res) {
  const wpOptions = new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)
  const pito = new WebpayPlus.Transaction(wpOptions);

  const dateNow = Date.now()
  const buyOrder = `Product-Name-${dateNow}`
  const sessionId = dateNow.toString();
  const amount = 3000
  const return_url = "http://localhost:3000"

  const response = await pito.create(buyOrder, sessionId, amount, return_url);

  return res.json(response)
})

app.get()

module.exports = { app }