from django.db import models
from accounts.models import User
from django.utils import timezone


class CookBook(models.Model):
    cookbook_id=models.AutoField(primary_key=True)
    user = models.ForeignKey(
        User, 
        related_name="user", 
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=50)
    url = models.TextField(null=True, blank=True)
    memo = models.TextField(null=True, blank=True, max_length=300)
    created_at = models.DateTimeField(default=timezone.now)
    # cookitems = models.ForeignKey(
    #     CookItem, 
    #     related_name='cookitem', 
    #     on_delete=models.SET_NULL,
    #     blank=True,
    #     null=True,
    # )
    def __str__(self):
        return self.title


class CookItem(models.Model):
    cookitem_id = models.AutoField(primary_key=True)
    item = models.CharField(max_length=50, null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    cookbook = models.ForeignKey(
        CookBook,
        related_name="cookitem",
        to_field='cookbook_id',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.item