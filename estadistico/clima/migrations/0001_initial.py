# Generated by Django 2.2.5 on 2019-10-03 19:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('geo', '0007_auto_20191002_1344'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mes', models.CharField(max_length=50, unique=True)),
                ('visible', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Precipitacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precipitacion', models.DecimalField(decimal_places=2, max_digits=6)),
                ('departamento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='precipitacion', to='geo.Departamento')),
                ('mes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='precipitacion', to='clima.Mes')),
                ('municipio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='precipitacion', to='geo.Municipio')),
            ],
            options={
                'verbose_name': 'Precipitacion',
            },
        ),
    ]
