# Generated by Django 3.1.1 on 2020-09-10 06:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('newsarticle', '0004_category_icon'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='posted_on',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date Time of Posting'),
        ),
    ]
