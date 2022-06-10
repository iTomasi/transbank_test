const express = require("express");
const { WebpayPlus, Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = require("transbank-sdk");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    message: "OK"
  })
  
});

app.get("/webpay/create", async (req, res) => {
  const txOptions = new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration);
  const tx = new WebpayPlus.Transaction(txOptions);

  const buyOrder = `product-${Date.now()}`;
  const sessionId = `session-${Date.now()}`
  const amount = 4000;
  const return_url = "http://localhost:3000/confirm";

  const response = await tx.create(buyOrder, sessionId, amount, return_url);
  return res.json({
    message: "OK",
    data: {
      url: response.url,
      token: response.token
    }
  })

})

module.exports = { app }