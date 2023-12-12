import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  $evnt: any;

  constructor(private service: SharedService) { }
  @Input() emp: any;
  EmployeesId: string | undefined;
  EmployeesName: string | undefined;
  Department: string | undefined;
  DateOfJoining: string | undefined;
  PhotoFileName: string | undefined;
  PhotoFilePath: string | undefined;

  DepartmentsList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList()
  }

  loadDepartmentList() {
    this.service.getAllDepartNames().subscribe(data => {
      this.DepartmentsList = data;

      this.EmployeesId = this.emp.EmployeesId;
      this.EmployeesName = this.emp.EmployeesName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      EmployeesId: this.EmployeesId,
      EmployeesName: this.EmployeesName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };
    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      EmployeesId: this.EmployeesId,
      EmployeesName: this.EmployeesName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any) =>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }


}
