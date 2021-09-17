export interface ContentStringOption {
  activated: boolean;
  value: string;
}

export interface ContentNumberOption {
  activated: boolean;
  value: number;
}

export interface ContentColumn {
  type: 'STRING';
  name: string;
  length: ContentNumberOption;
  defaultValue: ContentStringOption;
  allowNull: boolean;
  unique: boolean;
}

export interface Content {
  modelName: string;
  tableName: string;
  columns: ContentColumn[];
}
