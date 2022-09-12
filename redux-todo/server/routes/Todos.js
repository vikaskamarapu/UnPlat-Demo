const express = require('express');
const router = express.Router();
const { Todos } = require("../models");

router.get("/", async (req, res) => {
    const listOfTodos = await Todos.findAll();
    res.json(listOfTodos);
});

router.post("/", async (req, res) => {
    const todo = req.body
    await Todos.create(todo);
    res.json(todo);
});

router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    await Todos.destroy({ where: { id: id } });
    res.json("Todo deleted");
});

module.exports = router