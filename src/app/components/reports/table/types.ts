export interface Reports {
  id?: string;
  name?: string;
  description?: string;
}

export interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

export interface ExportColumn {
  title: string;
  dataKey: string;
}
