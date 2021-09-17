import { Content } from '../../web/interfaces/content.interface';
import { DataTypes, ModelAttributes } from 'sequelize';

const entityUtil = {
  parseModelAttributes: (schema: Content) => {
    const attributes: ModelAttributes = {};

    schema.columns.map((column) => {
      const options: any = {};

      options.allowNull = column.allowNull;
      options.unique = column.unique;

      if (column.length.activated) {
        options.type = DataTypes[column.type](column.length.value);
      } else {
        options.type = DataTypes[column.type];
      }

      if (column.defaultValue.activated) {
        options.defaultValue = column.defaultValue.value;
      }

      attributes[column.name] = options;
    });

    return attributes;
  },
};

export default entityUtil;
