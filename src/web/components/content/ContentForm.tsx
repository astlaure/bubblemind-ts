import React from 'react';
import { useFormik } from 'formik';
import StringColumn from './StringColumn';

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

  const handleClick = () => {
    const column = {
      type: 'STRING',
      name: '',
      allowNull: false,
      unique: false,
      length: { activated: false, value: 255 },
      defaultValue: { activated: false, value: '' },
    };
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
          {values.columns.map((column, index) => {
            return <StringColumn key={index} index={index} column={column} handleChange={handleChange} />;
          })}
        </div>
        <button type="button" onClick={handleClick}>Add Field</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ContentForm;
