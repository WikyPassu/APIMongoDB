<hr>
<h1>❤ Aprendizaje: manejo de APIs ❤</h1>
<p>• Se utilizará éste repositorio con un proyecto funcional con la finalidad de explicar su funcionamiento para lograr la creación de una API propia.</p>
<hr>
<h2>🦴 Contexto 🦴</h2>
<p>➤ Se desarrolló la primera versión de una API para el pet shop Pupyness Pet Caring que realiza las siguientes funcionalidades:</p>
<p>• Ingreso de un perrito</p>
<p>• Modificacion de un perrito</p>
<p>• Baja de un perrito</p>
<p>• Traer un perrito</p>
<hr>
<h2>🐕 Colección 🐕</h2>
<p>➤ Trabajaremos con la colección perritos, cada documento perrito estará compuesto por: </p>
<p>• Raza</p>
<p>• Color</p>
<p>• Peso</p>
<p>• Apodos (array de strings)</p>
<p>• Obediencia (array de objetos json)</p>
<p>• Dueño (objeto json)</p>
<p>➤ El frontend, a efectos de testear la base de datos, es simple y consta únicamente de botonitos con interacciones con la base de datos.</p>
<p><b>NO debe permitirse el ingreso por pantalla.</b></p>
<hr>
<h2>🐩 Nuevas funcionalidades exigidas 🐩</h2>
<p>• Luego de una nueva reunión con el cliente, se indicó que se necesitan las siguientes funcionalidades:</p>
<p>➤ Muestra de todos los perritos cargados</p>
<p>➤ Mostrar la raza de perritos con más ingresos y su cantidad </p>
<p>➤ Mostrar todos los trucos que sabe hacer el perro Lobo y los niveles correspondientes.</p>
<hr>
<h2> 🐾 Primeros pasos 🐾</h2>
<h3>➤ 1. Descargar todo el repositorio.</h3>
<p>Separar las carpetas BACKEND y FRONTEND (en el back trabajaremos con mongo y nodejs, en el front con angular).
Es importante que creen un repositorio para el BACKEND y otro para el FRONTEND (subiremos ambos a heroku, pero separados).</p>
<h3>➤ 2. Registrarnos en MongoDB Atlas, crear y configurar la base de datos.</h3>
<p>Primero entramos a https://www.mongodb.com/es/cloud/atlas y le damos al boton Start free.</p>
<img src="images/1.atlas/1.jpg">
<p>Luego nos registramos usando nuestra cuenta de Google o llenando los datos de abajo y aceptamos los terminos.</p>
<img src="images/1.atlas/2.jpg">
<p>Ahora completamos los datos que nos piden y le damos al boton de Continue.</p>
<img src="images/1.atlas/3.jpg">
<p>Seleccionamos la opcion FREE y le damos a Create.</p>
<img src="images/1.atlas/4.jpg">
<p>Aca pueden elegir el proveedor, region y nombre de su Cluster. Una vez hecho esto, le damos al boton Create Cluster.</p>
<img src="images/1.atlas/5.jpg">
<p>Ahora esperamos unos minutos hasta que se haga deploy de nuestro Cluster.</p>
<img src="images/1.atlas/6.jpg">
<p>Una vez todo listo, le damos al boton Connect.</p>
<img src="images/1.atlas/7.jpg">
<p>En donde dice Add a connection IP address seleccionamos Allow Access from Anywhere.</p>
<img src="images/1.atlas/8.jpg">
<p>Aca no tocamos nada y le damos a Add IP Address.</p>
<img src="images/1.atlas/9.jpg">
<p>Ahora en el apartado Create a Database User vamos a crear el usuario con el que accederemos a la base de datos (anotenselo en algun lado, es importante), le damos a Create Database User.</p>
<img src="images/1.atlas/10.jpg">
<p>Una vez que hemos completado estos dos pasos, ya podemos darle a Choose a connection method.</p>
<img src="images/1.atlas/11.jpg">
<p>Le damos a Connect your application.</p>
<img src="images/1.atlas/12.jpg">
<p>Tambien nos anotamos el connection string que figura en el paso 2.</p>
<img src="images/1.atlas/13.jpg">
<p>Vamos a crear nuestra base de datos, le damos al boton Browse Collections.</p>
<img src="images/1.atlas/14.jpg">
<p>Apretamos Add My Own Data y creamos una base de datos llamada "veterinaria" y una coleccion de "perritos".</p>
<img src="images/1.atlas/15.jpg">
<img src="images/1.atlas/16.jpg">
<h3>➤ 3. Instalar dependencias y conocer la estructura del BACKEND.</h3>
<p>Es importante que instalen NodeJS: https://nodejs.org/es/download/</p>
<p>Lo primero que tenemos que hacer es abrir esta carpeta con el Visual Studio Code.</p>
<p>Luego abriremos una nueva terminal.</p>
<img src="images/2.backyfront/1.jpg">
<p>Ahora vamos a instalar las dependencias de este proyecto, para eso escribiremos:</p>
<p><b>npm install</b></p>
<p>La estructura del BACKEND deberia verse asi:</p>
<img src="images/2.backyfront/2.jpg">
<p>Las carpetas y archivos que mas nos interesan son:</p>
<img src="images/2.backyfront/3.jpg">
<p><b>config/db.config.js</b> (Configuracion de string de conexion a Atlas)</p>
<p><b>controllers/perrito.controller.js</b> (Donde escribiremos todas las funciones que tienen consultas a MongoDB)</p>
<p><b>routes/perrito.js</b> (Configuracion de las peticiones y a que funciones de controller llamaran)</p>
<p><b>app.js</b> (La API en si, lo unico que se toca y configuran son las rutas)</p>
<p>Cada archivo esta comentado para que se comprenda la manera en la que se estructura la API, en nuestro caso, una api para una veterinaria que necesita hacer consultas sobre perritos.</p>
<h3>➤ 4. Instalar dependencias y conocer la estructura del FRONTEND.</h3>
<p>Este frontend esta hecho en Angular, por lo tanto, lo ideal es instalarlo: https://angular.io/</p>
<p>Abrimos esta carpeta con Visual Studio Code. Instalamos las dependencias como lo hicimos antes, abriendo una terminal y escribiendo:</p>
<p><b>npm install</b></p>
<p>La estructura del BACKEND deberia verse asi:</p>
<img src="images/2.backyfront/4.jpg">
<p>Las carpetas y archivos que mas nos interesan son:</p>
<img src="images/2.backyfront/5.jpg">
<p><b>src/app/services/data.service.ts</b> (Este es un servicio exclusivamente creado para realizar peticiones HTTP, nuestra api usa GET, POST, PUT y DELETE).</p>
<p><b>src/app/app.component.html (Un HTML con botonitos que realizan las consultas al tocarlos).</b></p>
<p><b>src/app/app.component.ts (Aqui estara la logica necesaria para mostrar en pantalla las opciones que queramos y la funcion que realizara la peticion a nuestro BACKEND).</b></p>
<p>Aca tambien esta todo comentado para que se entienda cada cosa y como es que podemos hacer peticiones desde un FRONT a un BACK.</p>
<h3>➤ 5. Subir BACKEND y FRONTEND a Heroku.</h3>
<p>Les dejamos este repositorio donde se explica en el paso 3 de ahi como subir una aplicacion a heroku, basicamente tendran que hacer esto tanto para el front como para el back: https://github.com/flippiJS/nodejs-mongodb-heroku</p>
<p>Obviamente podriamos correr esta api localmente, el string de conexion quedaria conectado a nuestro Cluster, pero en lugar de usar heroku, bastaria con abrir la terminal con el BACKEND en Visual y escribir:</p>
<p><b>npm start</b></p>
<p>Nuestra api estara disponible en el puerto especificado en el proyecto. Desde nuestro navegador podriamos escribir las rutas y ver los cambios reflejados en nuestra base de datos.</p>
<p>Si quisieramos tambien correr localmente nuestro frontend, desde Visual abrimos una terminal y escribimos:</p>
<p><b>ng start</b></p>
<p>En el puerto especificado estara disponible nuestro front para ser testeado (recordar cambiar en las peticiones del app.component.ts que le vamos a pegar al localhost!!!).</p>
