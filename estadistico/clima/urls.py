from django.urls import path, include
from .api import ListaMes, AgregarMes, Precipitaciones, AgregarPrecipitacion, ListaPrecipitaciones
from .api import PrecipitacionDepartamento, PrecipitacionMunicipio

urlpatterns=[
    path('api/clima/mes/list', ListaMes.as_view()),
    path('api/clima/mes/add', AgregarMes.as_view()),
    path('api/clima/precipitacion/list', Precipitaciones.as_view()),
    path('api/clima/precipitacion/add', AgregarPrecipitacion.as_view()),
    path('api/clima/precipitacion/departamento', ListaPrecipitaciones.as_view()),
    path('api/clima/precipitacion/departamento/<int:pk>', PrecipitacionDepartamento.as_view()),
    path('api/clima/precipitacion/municipio/<int:pk>', PrecipitacionMunicipio.as_view()),
]