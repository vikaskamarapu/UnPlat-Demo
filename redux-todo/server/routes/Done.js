const express = require('express');
const router = express.Router();
const { Done } = require("../models");

router.get("/", async (req, res) => {
    const listOfDone = await Done.findAll();
    res.json(listOfDone);
});

router.post("/", async (req, res) => {
    const done = req.body
    await Done.create(done);
    res.json(done);
});

router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    await Done.destroy({ where: { id: id } });
    res.json("Done deleted");
});

module.exports = router