const express = require('express')
const sequelize = require('./Conexion/database')
const Employee = require('./Modelos/Employee')
const Product = require('./Modelos/Product')
var cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json())


// Get valor promedio de productos por categoria
app.get('/promedio-valor-por-categoria', async (req, resp) => {
    try {
        const resultado = await Product.findAll({
            attributes: [
                ['categoryCode', 'categoryName'],
                [sequelize.fn('AVG', sequelize.col('value')), 'avg_value']
            ],
            group: ['categoryCode']
        });

        if (resultado.length > 0) {
            resp.json({ 'Mensaje': 'Datos Encontrados', data: resultado });
        } else {
            resp.status(400).json({ 'Mensaje': 'Datos No Encontrados', data: [] });
        }

    } catch (error) {
        console.log(error);
        resp.status(500).json({ 'Mensaje': 'Ocurrió un error', data: error });
    }
});

// Get cantidad de productos por marca
app.get('/productos-por-marca', async (req, res) => {
    try {
        const resultado = await Product.findAll({
            attributes: [
                ['brandCode', 'brandName'],
                [sequelize.fn('COUNT', sequelize.col('brandCode')), 'cantidad_productos']
            ],
            group: ['brandCode']
        });

        if (resultado.length > 0) {
            res.json({ 'Mensaje': 'Datos Encontrados', data: resultado });
        } else {
            res.status(400).json({ 'Mensaje': 'Datos No Encontrados', data: [] });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'Mensaje': 'Ocurrió un error', data: error });
    }
});

//Para poder trabajar con los campos con nombres que llevan un '.' entre sí, se renombré las columnas
//en la BD para poder trabajar sin problemas, se alteró así:
//ALTER TABLE products CHANGE `category.code` categoryCode VARCHAR(255);
//ALTER TABLE products CHANGE `brand.code` brandCode VARCHAR(255);
//ALTER TABLE products CHANGE `family.code` familyCode VARCHAR(255);
//ALTER TABLE products CHANGE `line.code` lineCode VARCHAR(255);
//ALTER TABLE products CHANGE `productSegment.code` productSegmentCode VARCHAR(255);