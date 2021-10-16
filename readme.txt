Tecnologías usadas

MERN (Mongodb, Express, React, Node)


pasos para crear el proyecto

1.- definir la estructura de carpetas del proyecto
2.- npm init --yes
3.- npm i express
4.- npm i nodemon -D (instala nodemon como dependencia de desarrollo, este módulo permite reiniciar el server al momento de realizar cualquier cambio)
5.- npm i morgan (permite visualizar la navegación o las peticiones de los clientes hacia el navegador)
6.- mpm i mongoose (nos permite la conectividad con la bd)
7.- npm i webpack -D (permite )
8.- npm i webpack-cli -D
9.- npm i react react-dom -D
10.- npm i @babel-core babel-loader @babel-preset-react @babel-preset-env -D


Para desplegar la aplicación usaremos:
Heroku (como hosting de app Nodejs, por cierto Heroku permite subir aplicaciones desarrolladas en node, java, go, etc)
mLab


para ir probando la app web
nodemon src/index.js
si tienes configurado en el package.json el script "dev": "nodemon src/index.js"
solo ejecutar npm run dev