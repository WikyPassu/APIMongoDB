const express = require("express");
const router = express.Router();
const PerritoController = require("../controllers/perrito.controller");

router.get("/traerUno", PerritoController.traerUnPerrito);
router.post("/insertar", PerritoController.insertarPerrito);
router.put("/modificar", PerritoController.modificarPerrito);
router.delete("/eliminar", PerritoController.eliminarPerrito);

module.exports = router;