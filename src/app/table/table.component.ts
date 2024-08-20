import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private apiService: APIService) {}
  sortedColumn?: string;
  table_data?: any[];
  sortDirection = 'asc';
  search?: string;
  cloneArray?: any[];

  ngOnInit(): void {
    this.apiService.fetchData().subscribe((data) => {
      this.table_data = [...data.users];

      this.cloneArray = this.table_data;
    });
  }

  filterData() {
    this.table_data = this.cloneArray?.filter(
      (item) =>
        item.id.toString().includes(this.search) ||
        item.email.toString().includes(this.search) ||
        item.age.toString().includes(this.search) ||
        item.weight.toString().includes(this.search) ||
        item.firstName.toString().includes(this.search) ||
        item.lastName.toString().includes(this.search)
    );
  }

  sortData(col: string, value: string) {
    this.sortDirection = value;
    this.table_data?.sort((a, b) => {
      if (a[col] < b[col]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (a[col] > b[col]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  backgroundColor(index: number) {
    return {
      'background-color': index % 2 === 0 ? '#ca3894' : '#dcdcdc',
      color: index % 2 === 0 ? '#fff' : '#000',
    };
  }
}
