import express from "express";

const port = 3000;
const app = express();

let type = "weekday";
let adv = "Let's work hard.";

const d = new Date("2025-07-19");
const day = d.getDay();

if (day === 0 || day === 6) {
  type = "weekend";
  adv = "Let's have fun.";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    weekType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}.`);
});
