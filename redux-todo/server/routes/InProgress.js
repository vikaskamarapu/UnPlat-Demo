const express = require('express');
const router = express.Router();
const { InProgress } = require("../models");

router.get("/", async (req, res) => {
    const listOfInProg = await InProgress.findAll();
    res.json(listOfInProg);
});

router.post("/", async (req, res) => {
    const inprog = req.body
    await InProgress.create(inprog);
    res.json(inprog);
});

router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    await InProgress.destroy({ where: { id: id } });
    res.json("InProgress deleted");
});

module.exports = router