from rest_framework import generics
from .serializers import *
from .models import *

class MesView(generics.ListAPIView):
    queryset = Mes.objects.all()
    serializer_class = MesSerializer

class MesCreate(generics.CreateAPIView):
    queryset = Mes.objects.all()
    serializer_class = MesSerializer

class PrecipitacionView(generics.ListAPIView):
    queryset = Precipitacion.objects.all()
    serializer_class = PrecipitacionSerializer

class PrecipitacionCreate(generics.CreateAPIView):
    queryset = Precipitacion.objects.all()
    serializer_class = PrecipitacionSerializer