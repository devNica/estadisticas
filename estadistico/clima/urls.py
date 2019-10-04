from django.urls import path, include
from .api import MesView, MesCreate, PrecipitacionView, PrecipitacionCreate

urlpatterns=[
    path('api/clima/mes/list', MesView.as_view()),
    path('api/clima/mes/add', MesCreate.as_view()),
    path('api/clima/precipitacion/list', PrecipitacionView.as_view()),
    path('api/clima/precipitacion/add', PrecipitacionCreate.as_view()),
]