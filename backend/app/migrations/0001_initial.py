# Generated by Django 4.1.5 on 2023-02-12 14:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CookBook',
            fields=[
                ('cookbook_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('url', models.TextField(blank=True, null=True)),
                ('memo', models.TextField(blank=True, max_length=300, null=True)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CookItem',
            fields=[
                ('cookitem_id', models.AutoField(primary_key=True, serialize=False)),
                ('item', models.CharField(blank=True, max_length=50, null=True)),
                ('quantity', models.IntegerField(blank=True, null=True)),
                ('cookbook', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cookbook', to='app.cookbook')),
            ],
        ),
    ]
