from rest_framework import generics
from .serializers import *
from .models import *
from geo.models import *
from geo.serializers import *

class ListaMes(generics.ListAPIView):
    queryset = Mes.objects.all()
    serializer_class = MesSerializer

class AgregarMes(generics.CreateAPIView):
    queryset = Mes.objects.all()
    serializer_class = MesSerializer

class Precipitaciones(generics.ListAPIView):
    queryset = Precipitacion.objects.all()
    serializer_class = PrecipitacionSerializer

class AgregarPrecipitacion(generics.CreateAPIView):
    queryset = Precipitacion.objects.all()
    serializer_class = PrecipitacionSerializer

class ListaPrecipitaciones(generics.ListAPIView):
    queryset = Departamento.objects.all()
    serializer_class = PrecipitacionDepartamentoSerializer

class PrecipitacionDepartamento(generics.RetrieveAPIView):
    queryset = Departamento.objects.all()
    serializer_class = PrecipitacionDepartamentoSerializer


##reciente
class PrecipitacionMunicipio(generics.RetrieveAPIView):
    queryset = Municipio.objects.all()
    serializer_class = PrecipitacionMunicipioSerializer
