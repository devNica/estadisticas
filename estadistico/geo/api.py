from rest_framework import generics
from .serializers import *
from .models import *

class ZonaView(generics.ListAPIView):
    queryset = Zona.objects.all()
    serializer_class = ZonaSerializer

class ZonaCreate(generics.CreateAPIView):
    queryset = Zona.objects.all()
    serializer_class = ZonaSerializer

class DepartamentoView(generics.ListAPIView):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class DepartamentoCreate(generics.CreateAPIView):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class MunicipioView(generics.ListAPIView):
    queryset = Municipio.objects.all()
    serializer_class = MunicipioSerializer

class MunicipioCreate(generics.CreateAPIView):
    queryset = Municipio.objects.all()
    serializer_class = MunicipioSerializer


class DepartamentoDetalleView(generics.RetrieveAPIView):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoDetalleSerializer 