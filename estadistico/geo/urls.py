from django.urls import path, include
from .api import ZonaView, ZonaCreate, DepartamentoView, DepartamentoCreate, MunicipioView, MunicipioCreate

urlpatterns=[
    path('api/zona/list', ZonaView.as_view()),
    path('api/zona/add', ZonaCreate.as_view()),
    path('api/departamento/list', DepartamentoView.as_view()),
    path('api/departamento/add', DepartamentoCreate.as_view()),
    path('api/municipio/list', MunicipioView.as_view()),
    path('api/municipio/add', MunicipioCreate.as_view()),
]
