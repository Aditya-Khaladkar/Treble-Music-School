# Generated by Django 4.0.4 on 2022-11-06 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='music_student',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('sex', models.CharField(max_length=10)),
                ('course', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('feedback', models.CharField(max_length=200)),
            ],
        ),
    ]
