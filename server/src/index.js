const { app } = require("./app");

app.listen(
  app.get("port"),
  () => console.log(`SV ON PORT ${app.get("port")}`)
);