# Generated by Django 4.0 on 2022-01-16 11:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_player_year_of_join'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.group'),
        ),
    ]
