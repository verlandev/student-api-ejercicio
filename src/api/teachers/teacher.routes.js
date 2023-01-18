const express = require('express');
const controller = require('./teacher.controller')

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.get("/getbyname/:name", controller.getByName);

router.post("/create", controller.createPost);

router.put('/edit/:id', controller.editPut);

router.delete('/delete/:id', controller.deleteTeacher);

module.exports = router;