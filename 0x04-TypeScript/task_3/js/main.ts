/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = CRUD.updateRow(newRowID, row);
const deletedRow: boolean = CRUD.deleteRow(newRowID);

console.log(newRowID);
console.log(updatedRow);
console.log(deletedRow);
