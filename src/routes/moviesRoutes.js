const express = require('express');
const router = express.Router();
const { list, newest, recomended, detail, add, create, edit, update, deleteMovie, destroy } = require('../controllers/moviesController');
const movieAddValidator = require("../validations/movieAddValidator");


router.get('/movies', list);
router.get('/movies/new', newest);
router.get('/movies/recommended', recomended);
router.get('/movies/detail/:id', detail);


//Rutas exigidas para la creación del CRUD
router.get('/movies/add', add);
router.post('/movies/create', movieAddValidator, create);
router.get('/movies/edit/:id', edit);
router.put('/movies/edit/:id', movieAddValidator, update);
router.get('/movies/delete/:id', deleteMovie);
router.delete('/movies/delete/:id', destroy);

module.exports = router;