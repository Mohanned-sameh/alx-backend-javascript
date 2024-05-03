import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID {
  return 1;
}

export function deleteRow(rowId: RowID): boolean {
  return true;
}

export function updateRow(rowId: RowID, row: RowElement): RowElement {
  return row;
}
