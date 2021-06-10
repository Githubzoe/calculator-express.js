const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.n1);
  const num2 = Number(req.body.n2);
  const result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
