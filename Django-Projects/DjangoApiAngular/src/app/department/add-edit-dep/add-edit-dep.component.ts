import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep:any; 
  DepartmentsId: string | undefined;
  DepartmentsName: string | undefined;


  ngOnInit(): void {
    this.DepartmentsId=this.dep.DepartmentsId;
    this.DepartmentsName=this.dep.DepartmentsName;
  }

  addDepartment(){
    var val = {DepartmentsId:this.DepartmentsId,
                DepartmentsName:this.DepartmentsName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentsId:this.DepartmentsId,
      DepartmentsName:this.DepartmentsName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
