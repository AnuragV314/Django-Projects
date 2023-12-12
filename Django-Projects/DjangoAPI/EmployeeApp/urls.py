from django.urls import path
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('department/', views.departmentApi),
    path('department/<int:Id>/',views.departmentApi),

    path('employee/', views.employeestApi),
    path('employee/<int:Id>/',views.employeestApi),

    path('Savefile', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

