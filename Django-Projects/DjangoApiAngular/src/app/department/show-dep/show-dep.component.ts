import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  ModalTitle: any;
  ActivateAddEditDepComp: boolean = false;
  dep: any;
  DepartmentList: any = [];

  DepartmentsIdFilter: string = "";
  DepartmentsNameFilter: string = "";
  DepartmentsListWithoutFilter: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep = {
      DepartmentsId: 0,
      DepartmentsName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    if (confirm("Are you sure ???")) {
      // console.log(item.DepartmentsId)
      this.service.deleteDepartment(item.DepartmentsId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }


  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList()
  }


  refreshDepList() {
    this.service.getDepList().subscribe(deta => {
      this.DepartmentList = deta;
      this.DepartmentsListWithoutFilter = deta;
    });
  }



  FilterFn() {
    var DepartmentIdFilter = this.DepartmentsIdFilter;
    var DepartmentNameFilter = this.DepartmentsNameFilter;

    this.DepartmentList = this.DepartmentsListWithoutFilter.filter(function (el: any) {
      return el.DepartmentsId.toString().toLowerCase().includes(
        DepartmentIdFilter.toString().trim().toLowerCase()
      ) &&
        el.DepartmentsName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: any, asc: any) {
    this.DepartmentList = this.DepartmentsListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }
}
