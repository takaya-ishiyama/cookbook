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
    def __str__(self):
        return self.title

UNIT_CHOICES=(
    (0,'g'),
    (1,'ml'),
    (2,'cc'),
    (3,'大さじ'),
    (4,'小さじ'),
    (5,'適量'),
    (6,'個'),
)

class CookItem(models.Model):
    cookitem_id = models.AutoField(primary_key=True)
    item = models.CharField(max_length=50, null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    unit=models.IntegerField(verbose_name='単位', choices=UNIT_CHOICES, null=True, blank=True)
    cookbook = models.ForeignKey(
        CookBook,
        related_name="cookitem",
        to_field='cookbook_id',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.item