from django.urls import path, include
from .api import ZonaView, ZonaCreate, DepartamentoView, DepartamentoCreate

urlpatterns=[
    path('api/zona/list', ZonaView.as_view()),
    path('api/zona/add', ZonaCreate.as_view()),
    path('api/departamento/list', DepartamentoView.as_view()),
    path('api/departamento/add', DepartamentoCreate.as_view()),
]
