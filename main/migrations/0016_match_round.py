# Generated by Django 4.0 on 2022-01-23 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_match_result_match_set_results'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='round',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
    ]
