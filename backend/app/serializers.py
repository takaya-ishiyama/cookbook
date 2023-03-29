from rest_framework import serializers
from .models import CookItem, CookBook
from accounts.serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from .models import CookItem
from accounts.models import User

class CookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookItem
        fields = '__all__'

class CookBookSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    cookitem = CookItemSerializer(many=True, read_only=True)
    class Meta:
        model = CookBook
        fields = ('cookbook_id','title','url','memo','user','cookitem')

class CookBookPostSerializer(serializers.ModelSerializer):
    user=UserSerializer(read_only=True)
    user_id= serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), write_only=True)
    cookitem = CookItemSerializer(many=True, required=False, read_only=True)
    
    class Meta:
        model = CookBook
        fields = ('cookbook_id','title','url','memo','user_id','user','cookitem')


class CookBookPutSerializer(serializers.ModelSerializer):
    user=UserSerializer(read_only=True)
    user_id= serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), write_only=True)
    cookitem = CookItemSerializer(many=True, required=False)

    class Meta:
        model = CookBook
        fields = ('cookbook_id','title','url','memo','user_id','user','cookitem')
        
    # def update(self, instance, validated_data):
    #     cookitems_data = validated_data.pop('cookitem', None)
    #     if cookitems_data is not None:
    #         cookitems = (instance.cookitem).all()
    #         cookitems = list(cookitems)
    #         for cookitem_data in cookitems_data:
    #             cookitem = cookitems.pop(0)
    #             cookitem.item = cookitem_data.get('item', cookitem.item)
    #             cookitem.quantity = cookitem_data.get('quantity', cookitem.quantity)
    #             cookitem.unit = cookitem_data.get('unit', cookitem.unit)
    #             cookitem.save()
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.url = validated_data.get('url', instance.url)
    #     instance.memo = validated_data.get('memo', instance.memo)
    #     instance.save()
    #     return instance
