# Generated by Django 3.2.20 on 2023-10-19 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_rename_auther_post_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.IntegerField(choices=[(1, 'Publish'), (0, 'Draft')], default=0),
        ),
    ]
