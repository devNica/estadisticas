from rest_framework import serializers
from .models import *


class MesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mes
        fields = '__all__'


class PrecipitacionSerializer(serializers.ModelSerializer):

    departamento = serializers.SerializerMethodField()
    municipio = serializers.SerializerMethodField()
    mes = serializers.SerializerMethodField()

    def get_departamento(self, obj):
        return str(obj.departamento)
    def get_municipio(self, obj):
        return str(obj.municipio)
    def get_mes(self, obj):
        return str(obj.mes)  


    class Meta:
        model = Precipitacion
        fields = ['id', 'precipitacion', 'departamento', 'municipio', 'mes']