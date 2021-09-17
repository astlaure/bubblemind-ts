import React from 'react';
import { useFormik } from 'formik';
import StringColumn from './StringColumn';
import PrimaryKeyColumn from './PrimaryKeyColumn';
import { ContentColumn } from '../../interfaces/content.interface';

const ContentForm: React.FC = () => {
  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      tableName: '',
      columns: [],
    },
    onSubmit(data) {
      console.log(data);
    },
  });

  const handleClick = (type: string) => {
    let column: any = {};
    switch (type) {
      case 'PRIMARY':
        column = { type: 'BIGINT', name: 'id', primaryKey: true, autoIncrement: false };
        break;
      case 'STRING':
        column = { type: 'STRING', name: '', allowNull: false, unique: false, length: { activated: false, value: 255 }, defaultValue: { activated: false, value: '' } };
        break;
      default:
        return;
    }
    setFieldValue('columns', [...values.columns, column]);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div>
        <label>
          Name
          <input type="text" name="tableName" value={values.tableName} onChange={handleChange} />
        </label>
        <div>
          {values.columns.map((column: ContentColumn, index) => {
            switch (column.type) {
              case 'BIGINT':
                return <PrimaryKeyColumn key={index} index={index} column={column} handleChange={handleChange} />;
              case 'STRING':
                return <StringColumn key={index} index={index} column={column} handleChange={handleChange} />;
            }
          })}
        </div>
        <div>
          <button type="button" onClick={() => handleClick('PRIMARY')}>Add Primary Key</button>
          <button type="button" onClick={() => handleClick('STRING')}>Add String</button>
        </div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ContentForm;
