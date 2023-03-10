from django.contrib import admin
from .models import CookBook, CookItem

# Register your models here.
@admin.register(CookBook)
class AdminRoom(admin.ModelAdmin):
    list_display = (
        'user',
        'cookbook_id',
        'title',
        'url',
        'memo',
        # 'cookitems',
    )

@admin.register(CookItem)
class AdminRoom(admin.ModelAdmin):
    list_display = (
        'cookitem_id',
        'item',
        'quantity',
        'cookbook'
    )