const express = require('express');

const controller = require ('./student.controller')

const router = express.Router();

router.get('/', controller.indexGet);

router.post('/create', controller.createPost);

router.put('/edit/:id', controller.editPut);

router.get('/getbyName/:name', controller.getByName);

router.get('/getbyid/:id', controller.getById)

router.delete('/delete/:id', controller.deleteStudent)

module.exports = router;