import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario',{
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.BOOLEAN//Se usa boolean por que en la bd esta tinyint pero lo convierte automaticamente sequelize
    }
});


export default Usuario;