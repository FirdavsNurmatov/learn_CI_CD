import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.status(200).send("Assalomu alaykum!");
});

app.listen(3355, () => {
  console.log(`Application running on port: ${3355}`);
});
