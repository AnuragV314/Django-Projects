from rest_framework import serializers
from .models import Departments, Employees


class DepartmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentsId',
                  'DepartmentsName')


class EmployeesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeesId',
                  'EmployeesName',
                  'Department',
                  'DateOfJoining',
                  'PhotoFileName')
