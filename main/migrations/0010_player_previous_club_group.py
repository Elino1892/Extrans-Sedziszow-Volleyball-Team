# Generated by Django 4.0 on 2022-01-17 15:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_player_height_alter_player_number_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='player_previous_club',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.group'),
        ),
    ]