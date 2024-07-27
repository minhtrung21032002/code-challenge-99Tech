import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

class Resource extends Model {}

Resource.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Define other attributes here
}, {
  sequelize,
  modelName: 'Resource',
});

export default Resource;
