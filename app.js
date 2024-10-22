const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const ip = '44.197.2.144';
const port = 3000;
const fs = require('fs');

// Configuración de middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname)));

// Configuración de conexión a MySQL
let conexion = mysql.createConnection({
    host: "database-1.cpu2kase657b.us-east-1.rds.amazonaws.com",
    database: "PaginaWeb",
    user: "admin",
    password: "admin123"
});

conexion.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Manejo de la solicitud POST del formulario
app.post('/submit-form', (req, res) => {
    const { nombre, apellidos, celular, gmail, descripcion } = req.body;

    // Consulta SQL para insertar los datos del formulario en la base de datos
    const query = 'INSERT INTO Contactanos (nombre, apellidos, celular, gmail, descripcion) VALUES (?, ?, ?, ?, ?)';

    pool.query(query, [nombre, apellidos, celular, gmail, descripcion], (err, result) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack);
            res.status(500).send('Ocurrió un error al procesar tu consulta.');
            return;
        }

        // Redirige a la página de confirmación o éxito
        const htmlPath = path.join(__dirname, 'public', 'HTML', 'Contactanos.html');
        fs.readFile(htmlPath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo HTML: ' + err);
                res.status(500).send('Ocurrió un error al procesar tu consulta.');
                return;
            }
            res.send(data);
        });
    });
});

// Servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://${ip}:${port}`);
});