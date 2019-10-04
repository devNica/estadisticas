from django.db import models
from geo.models import Departamento, Municipio

# Create your models here.
class Mes(models.Model):
    mes = models.CharField(max_length=50, unique=True, blank=False, null=False)
    visible = models.BooleanField(default=True)


    def __str__(self):
        return '{}'.format(self.mes)
    
    class Meta:
        verbose_name: 'Mes'
        verbose_name_plural: 'Meses'

class Precipitacion(models.Model):
    precipitacion = models.DecimalField(max_digits=6, decimal_places=2)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE, related_name='precipitacion')
    municipio = models.ForeignKey(Municipio, on_delete=models.CASCADE, related_name='precipitacion')
    mes = models.ForeignKey(Mes, on_delete=models.CASCADE, related_name='precipitacion')

    def __str__(self):
        return '{}'.format(self.precipitacion)
    
    class Meta:
        verbose_name = 'Precipitacion'
        verbose_name_plural: 'Precipitaciones'
        

