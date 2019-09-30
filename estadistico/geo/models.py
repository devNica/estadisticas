from django.db import models

# Create your models here.

class infoBase(models.Model):
    visible = models.BooleanField(default=True)
    extension = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    nombre = models.CharField(max_length=200)

   

    class Meta:
        abstract = True


class Zona(infoBase):
    
    ZONA_CHOICES = (
        ('P', 'Pacifico'),
        ('C', 'Central'),
        ('N', 'Norte'),
        ('R', 'Region Autonoma'),
    )

    zona = models.CharField(max_length=1, choices=ZONA_CHOICES)

    def __str__(self):
        return '{}'.format(self.zona)

    class Meta: 
        verbose_name = 'Zona'
        verbose_name_plural = 'Zonas'

class Departamento(infoBase):

    zona = models.ForeignKey(Zona, on_delete = models.CASCADE)

    def __str__(self):
        return '{}'.format(self.nombre)

    class Meta:
        verbose_name='Departamento'
        verbose_name_plural = 'Departamentos'

class Municipio(infoBase):
     
    latitud_norte = models.CharField(max_length=6)
    longitud_oeste = models.CharField(max_length=6)
    msm = models.DecimalField(max_digits=6, decimal_places=2)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE, null=True)
    cabecera = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return '{}'.format(self.nombre)

    class Meta:
        verbose_name = 'Municipio'
        verbose_name_plural = 'Municipios'



