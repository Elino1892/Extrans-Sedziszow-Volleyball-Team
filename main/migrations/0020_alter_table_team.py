# Generated by Django 4.0 on 2022-01-23 21:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_remove_table_place'),
    ]

    operations = [
        migrations.AlterField(
            model_name='table',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.team'),
        ),
    ]
