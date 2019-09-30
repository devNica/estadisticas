from rest_framework import serializers
from .models import *

class ZonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zona
        fields = '__all__'

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = '__all__'

class MunicipioSerializer(serializers.ModelSerializer):

    departamento = serializers.SerializerMethodField()

    def get_departamento(self, obj):
        return str(obj.departamento)

    class Meta:
        model = Municipio
        fields = ('id', 'visible', 'extension', 'nombre', 'latitud_norte', 'longitud_oeste', 'msm', 'departamento', 'cabecera')