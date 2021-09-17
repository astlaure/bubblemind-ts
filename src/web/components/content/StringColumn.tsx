import React from 'react';
import { ContentColumn } from '../../interfaces/content.interface';

interface Props {
  index: number;
  column: ContentColumn;
  handleChange: any;
}

const StringColumn: React.FC<Props> = (props) => {
  const { index, column, handleChange } = props;
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" name={`columns[${index}].name`} value={column.name} onChange={handleChange} />
      <div>
        <div>
          <input type="checkbox" name={`columns[${index}].allowNull`} checked={column.allowNull} onChange={handleChange} />
          <label htmlFor="">Allow Null</label>
        </div>
        <div>
          <input type="checkbox" name={`columns[${index}].unique`} checked={column.unique} onChange={handleChange} />
          <label htmlFor="">Unique</label>
        </div>
        <div>
          <input type="checkbox" name={`columns[${index}].length.activated`} checked={column.length.activated} onChange={handleChange} />
          <label htmlFor="">Length (255)</label>
          <input type="number" name={`columns[${index}].length.value`} value={column.length.value} onChange={handleChange} />
        </div>
        <div>
          <input type="checkbox" name={`columns[${index}].defaultValue.activated`} checked={column.defaultValue.activated} onChange={handleChange} />
          <label htmlFor="">Default Value</label>
          <input type="text" name={`columns[${index}].defaultValue.value`} value={column.defaultValue.value} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default StringColumn;
