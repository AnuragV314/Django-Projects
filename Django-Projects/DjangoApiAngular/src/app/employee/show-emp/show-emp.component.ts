import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {


  constructor(private service: SharedService) { }

  EmployeeList: any = [];
  ModalTitle: any;
  emp: any;
  ActivateAddEditEmpComp: any;



  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp={
      EmployeesId:0,
      EmployeesName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"",
    };
    // console.log(this.emp.EmployeesId);
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item: any) {
    this.emp = item;
    this.ModalTitle = "Edit Employee"
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if(confirm('Are you sure ???')){
      console.log(item.EmployeesId);
      this.service.deleteEmployee(item.EmployeesId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList()
      })
    }
  }

  
  refreshEmpList() {
    this.service.getEmpList().subscribe(deta => {
      this.EmployeeList = deta;
    });
  }
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList()
  }
}
