# Generated by Django 4.0 on 2022-01-06 14:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_player_position'),
    ]

    operations = [
        migrations.CreateModel(
            name='Previous_Club',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('season', models.CharField(max_length=20)),
                ('position', models.CharField(max_length=30)),
            ],
        ),
        migrations.AddField(
            model_name='player',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='Player_Previous_Club',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.player')),
                ('previous_club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.previous_club')),
            ],
        ),
    ]
