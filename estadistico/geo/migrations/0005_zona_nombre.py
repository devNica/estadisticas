# Generated by Django 2.2.5 on 2019-09-30 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geo', '0004_municipio_cabecera'),
    ]

    operations = [
        migrations.AddField(
            model_name='zona',
            name='nombre',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
