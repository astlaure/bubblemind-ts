import React from 'react';
import { ContentColumn } from '../../interfaces/content.interface';

interface Props {
  index: number;
  column: ContentColumn;
  handleChange: any;
}

const PrimaryKeyColumn: React.FC<Props> = (props) => {
  const { index, column, handleChange } = props;
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" name={`columns[${index}].name`} value={column.name} onChange={handleChange} />
      <div>
        <div>
          <input type="checkbox" name={`columns[${index}].autoIncrement`} checked={column.autoIncrement} onChange={handleChange} />
          <label htmlFor="">Autoincrement</label>
        </div>
      </div>
    </div>
  );
};

export default PrimaryKeyColumn;
