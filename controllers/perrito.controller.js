const db = require("../models/db");

//Esta es la estructura normal de un perrito en la coleccion perritos
let perrito = {
   idPerrito: 1000,
   nombre: "Lobo",
   raza: "Sharpei",
   color: "negro",
   peso: 17,
   apodos: ["Lobito bebé", "Lolo", "Lobi"],
   obediencia: [
      {
         accion: "dar la pata",
         nivel: "excelente"
      },
      {
         accion: "quieto",
         nivel: "intermedio"
      },
      {
         accion: "besito",
         nivel: "increible"
      }
   ],
   duenio: {
      nombre: "Lucia",
      edad: 22,
      telefono: 1144859987
   }
};

//Traer un perrito
exports.traerUnPerrito = (req, res) => {
   db.getInstance().collection("perritos").aggregate([
      {
         $project: { 
            perrito: {
               nombre: "$nombre",
               raza: "$raza",
               duenio: "$duenio.nombre"
            }
         }
      },
      {
         $limit: 1
      }
   ]).toArray() //Importante! Aggregate devuelve array, sino no podremos usar then y catch
   .then((data) => {
      res.status(200).send( //Si todo salio bien, respondo codigo 200 y un mensaje de exito + el perrito encontrado
         {
            exito: "Perrito traido correctamente!", 
            perrito: data
         }
      );
   })
   .catch((err) => {
      res.status(500).send(
         {
            error: "Ocurrio un error al insertar documento",
            resMongoDB: err
         }
      ); 
   });
};

//Insertar un perrito (hardcodeado)
exports.insertarPerrito = (req, res) => {
   db.getInstance().collection("perritos").insertOne(perrito)
   .then((data) => { //Si todo salio bien, respondo codigo 200 y un mensaje de exito + el perrito insertado. Tambien es posible que de 200, pero que no se haya insertado nada, para eso se muestra el data
      res.status(200).send(
         {
            exito: "Perrito insertado correctamente!", 
            perrito: JSON.stringify(perrito),
            resMongoDB: data
         }
      );
   })
   .catch((err) => { //Si todo sale mal, respondo codigo 500 y un mensaje de error
      res.status(500).send(
         {
            error: "Ocurrio un error al insertar documento",
            resMongoDB: err
         }
      ); 
   });
};

//Modificar un perrito (hardcodeado)
exports.modificarPerrito = (req, res) => {
   db.getInstance().collection("perritos").updateOne(
      {
         idPerrito: 1000
      }, 
      {
         $set: {
            nombre: "Lola",
            "duenio.nombre": "Alan"
         }
      }
   )
   .then((data) => { //Si todo salio bien, respondo codigo 200 y un mensaje exito. Tambien es posible que de 200, pero que no se haya modificado nada, para eso se muestra el data
      res.status(200).send(
         {
            exito: "Perrito modificado correctamente!",
            resMongoDB: data
         }
      );
   })
   .catch((err) => { //Si todo sale mal, respondo codigo 500 y un mensaje de error
      res.status(500).send(
         {
            error: "Ocurrio un error al modificar documento",
            resMongoDB: err
         }
      );
   });
};

//Eliminar un perrito (hardcodeado)
exports.eliminarPerrito = (req, res) => {
   db.getInstance().collection("perritos").deleteOne(
      {
         idPerrito: 1000
      }
   )
   .then((data) => { //Si todo salio bien, respondo codigo 200 y un mensaje exito. Tambien es posible que de 200, pero que no se haya eliminado nada, para eso se muestra el data
      res.status(200).send(
         {
            exito: "Perrito eliminado correctamente!",
            resMongoDB: data
         }
      );
   })
   .catch((err) => { //Si todo sale mal, respondo codigo 500 y un mensaje de error
      res.status(500).send(
         {
            error: "Ocurrio un error al eliminar documento",
            resMongoDB: err
         }
      );
   });
};

//Insertar un perrito (pasando un json por parametro en el body de la peticion)
/*exports.insertarPerrito = (req, res) => {
   if(!req.body.perrito) //Si el parametro 'perrito' no existe, tiro error
   {
      res.status(400).send(
         {
            error: "Falta parametro 'perrito'!"
         }
      );
      return;
   }

   perrito = JSON.parse(req.body.perrito); //Guardo al perrito pasado por body de texto a objeto
   
   db.getInstance().collection("perritos").insertOne(perrito)
   .then((data) => {
      res.status(200).send( //Si todo salio bien, respondo codigo 200 y un mensaje de exito + el perrito insertado. Tambien es posible que de 200, pero que no se haya insertado nada, para eso se muestra el data
         {
            exito: "Perrito insertado correctamente!", 
            perrito: JSON.stringify(perrito),
            resMongoDB: data
         }
      );
   })
   .catch((err) => { //Si todo sale mal, respondo codigo 500 y un mensaje de error
      res.status(500).send(
         {
            error: "Ocurrio un error al insertar documento",
            resMongoDB: err
         }
      );
   });
};*/

//Modificar un perrito (pasando el id y un json con los campos a modificar como parametros por el body)
/*exports.modificarPerrito = (req, res) => {
   if(!req.body.id || !req.body.perrito)
   {
      res.status(400).send(
         {
            error: "Falta parametro 'id' o 'perrito'!"
         }
      );
      return;
   }
   db.getInstance().collection("perritos").updateOne(
      {
         idPerrito: parseInt(req.body.id)
      }, 
      {
         $set: JSON.parse(req.body.perrito)
      }
   )
   .then((data) => { //Si todo salio bien, respondo codigo 200 y un mensaje exito. Tambien es posible que de 200, pero que no se haya eliminado nada, para eso se muestra el data
      res.status(200).send(
         {
            exito: "Perrito modificado correctamente!",
            resMongoDB: data
         }
      );
   })
   .catch((err) => { //Si todo sale mal, respondo codigo 500 y un mensaje de error
      res.status(500).send(
         {
            error: "Ocurrio un error al modificar documento",
            resMongoDB: err
         }
      );
   });
};*/