# Generated by Django 4.1.1 on 2022-09-06 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_alter_agreement_orders_agreement_duration_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='page',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(blank=True, max_length=100, null=True)),
                ('text', models.CharField(blank=True, max_length=10000, null=True)),
            ],
        ),
    ]