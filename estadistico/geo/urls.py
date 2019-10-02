from django.urls import path, include
from .api import ZonaView, ZonaCreate, DepartamentoView, DepartamentoCreate, MunicipioView, MunicipioCreate

urlpatterns=[
    path('api/geo/zona/list', ZonaView.as_view()),
    path('api/geo/zona/add', ZonaCreate.as_view()),
    path('api/geo/departamento/list', DepartamentoView.as_view()),
    path('api/geo/departamento/add', DepartamentoCreate.as_view()),
    path('api/geo/municipio/list', MunicipioView.as_view()),
    path('api/geo/municipio/add', MunicipioCreate.as_view()),
]
