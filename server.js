require("dotenv").config();
const express = require("express");
const app = express();
const clanController = require("./controllers/clanController");
const playerController = require("./controllers/playerController");
const chestController = require("./controllers/chestController");
const battleController = require("./controllers/battleController");
const riverRaceLog = require("./controllers/riverRaceLog");

app.use(require("./middleware/headers"));

app.use("/api/clan", clanController);
app.use("/api/player", playerController);
app.use("/api/chest", chestController);
app.use("/api/battle", battleController);
app.use("/api/war", riverRaceLog);

app.listen(3001, console.log("running"));
