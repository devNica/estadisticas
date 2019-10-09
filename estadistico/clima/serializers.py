from rest_framework import serializers
from .models import *
from geo.models import *
from geo.serializers import *


class MesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mes
        fields = '__all__'


class PrecipitacionSerializer(serializers.ModelSerializer):

    municipio = serializers.SerializerMethodField()
    mes = serializers.SerializerMethodField()

    def get_municipio(self, obj):
        return str(obj.municipio)
    def get_mes(self, obj):
        return str(obj.mes)  


    class Meta:
        model = Precipitacion
        fields = ['id', 'precipitacion', 'municipio', 'mes']


class PrecipitacionDepartamentoSerializer(serializers.ModelSerializer):

    precipitacion = PrecipitacionSerializer(many=True)

    class Meta:
        model = Departamento
        fields = '__all__'