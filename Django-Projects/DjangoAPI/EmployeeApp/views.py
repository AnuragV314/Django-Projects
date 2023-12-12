from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Departments, Employees
from .serializers import DepartmentSerializers, EmployeesSerializers

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def departmentApi(request, Id=0):
    if request.method == 'GET':
        departments = Departments.objects.all()
        department_serializers = DepartmentSerializers(departments, many=True)
        return JsonResponse(department_serializers.data, safe=False)
    
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializers(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Added Successfully!!!', safe=False)
        return JsonResponse('Failed to Add.',safe=False)
    
    elif request.method=='PUT':
        department_data = JSONParser().parse(request)
        department=Departments.objects.get(DepartmentsId=department_data['DepartmentsId'])
        department_serializer=DepartmentSerializers(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    
    elif request.method == 'DELETE':
        # department_data = JSONParser().parse(request)
        # department = Departments.objects.get(DepartmentsId=department_data['DepartmentsId'])
        department = Departments.objects.get(DepartmentsId=Id)
        department.delete()
        return JsonResponse('Delete Successfully!!!',safe=False)
    
@csrf_exempt
def employeestApi(request, Id=0):
    if request.method == 'GET':
        employees = Employees.objects.all()
        employees_serializers = EmployeesSerializers(employees, many=True)
        return JsonResponse(employees_serializers.data, safe=False)
 
    elif request.method == 'POST':
        employees_data = JSONParser().parse(request)
        employees_serializers = EmployeesSerializers(data=employees_data)
        if employees_serializers.is_valid():
            employees_serializers.save()
            return JsonResponse('Added Successfully!!!', safe=False)
        return JsonResponse('Failed to Add.', safe=False)
    
    elif request.method == 'PUT':
        employees_data = JSONParser().parse(request)
        employees = Employees.objects.get(EmployeesId=employees_data['EmployeesId'])
        employees_serializers = EmployeesSerializers(employees, data=employees_data)
        if employees_serializers.is_valid():
            employees_serializers.save()
            return JsonResponse('Updated Successfully!!!', safe=False)
        return JsonResponse('Failed to update.',safe=False)
    
    elif request.method == 'DELETE':
        employees = Employees.objects.get(EmployeesId=Id)
        employees.delete()
        return JsonResponse('Delete Successfully!!!', safe=False)


@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)


