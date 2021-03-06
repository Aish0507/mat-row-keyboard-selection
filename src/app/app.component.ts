import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

interface TableItem {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mat-row-keyboard-selection-package';

  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;

  dataSource1: MatTableDataSource<TableItem>;
  selection1: SelectionModel<TableItem>;
  dataSource2: MatTableDataSource<TableItem>;
  selection2: SelectionModel<TableItem>;
  dataSource3: MatTableDataSource<TableItem>;
  selection3: SelectionModel<TableItem>;
  dataSource4: MatTableDataSource<TableItem>;
  selection4: SelectionModel<TableItem>;
  dataSource5: MatTableDataSource<TableItem>;
  selection5: SelectionModel<TableItem>;

  displayedColumnsA = ['select', 'name'];
  displayedColumnsB = ['name'];

  constructor() {}

  ngOnInit(): void {
    const data = [];
    for (let x = 0; x < 50; x++) {
      data.push({name: 'item ' + x});
    }

    this.dataSource1      = new MatTableDataSource<TableItem>(data);
    this.dataSource1.sort = this.sort1;
    this.selection1       = new SelectionModel<TableItem>(true);

    this.dataSource2 = new MatTableDataSource<TableItem>(data);
    this.selection2  = new SelectionModel<TableItem>(true);

    this.dataSource3 = new MatTableDataSource<TableItem>(data);
    this.selection3  = new SelectionModel<TableItem>(false);

    this.dataSource4 = new MatTableDataSource<TableItem>(data);
    this.selection4  = new SelectionModel<TableItem>(false);

    this.dataSource5 = new MatTableDataSource<TableItem>(data);
    this.selection5  = new SelectionModel<TableItem>(false);
  }
}
