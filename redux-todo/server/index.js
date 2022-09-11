const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

const db = require('./models');

//Routers
const postRouter = require("./routes/Todos");
app.use("/todos", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server is running on 3001")
    });
});
