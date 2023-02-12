from rest_framework import serializers
from .models import CookItem, CookBook
from accounts.serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from .models import CookItem

class CookItemSerializer(serializers.ModelSerializer):
    # cookbook = CookBookSerializer()
    class Meta:
        model = CookItem
        fields = ('cookitem_id','item','quantity','cookbook')

class CookBookSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    cookitem = CookItemSerializer(many=True)
    # cookitem = serializers.PrimaryKeyRelatedField(many=True)
    class Meta:
        model = CookBook
        fields = ('cookbook_id','title','url','memo','user','cookitem')
