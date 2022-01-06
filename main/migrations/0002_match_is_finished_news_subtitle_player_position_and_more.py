# Generated by Django 4.0 on 2022-01-06 11:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='is_finished',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='news',
            name='subtitle',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='position',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='year_of_join',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='news',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.news'),
        ),
        migrations.AlterField(
            model_name='news',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth.user'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='match',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.match'),
        ),
    ]
