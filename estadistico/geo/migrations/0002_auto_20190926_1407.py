# Generated by Django 2.2.5 on 2019-09-26 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zona',
            name='zona',
            field=models.CharField(choices=[('P', 'Pacifico'), ('C', 'Central'), ('N', 'Norte'), ('R', 'Region Autonoma')], max_length=1),
        ),
    ]
