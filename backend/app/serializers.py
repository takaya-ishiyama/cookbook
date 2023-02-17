from rest_framework import serializers
from .models import CookItem, CookBook
from accounts.serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from .models import CookItem
from accounts.models import User

class CookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookItem
        fields = ('cookitem_id','item','quantity','unit','cookbook')

class CookBookSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    cookitem = CookItemSerializer(many=True)
    class Meta:
        model = CookBook
        fields = ('cookbook_id','title','url','memo','user','cookitem')

class CookBookPostSerializer(serializers.ModelSerializer):
    user=UserSerializer(read_only=True)
    user_id= serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), write_only=True)
    cookitem = CookItemSerializer(many=True, allow_null=True, required=False)
    
    class Meta:
        model = CookBook
        fields = ('cookbook_id','title','url','memo','user_id','user','cookitem')

    def create(self, validated_date):
        validated_date['user'] = validated_date.get('user_id', None)
        if validated_date['user'] is None:
            raise serializers.ValidationError("user not found.") 
        del validated_date['user_id']
        return CookBook.objects.create(**validated_date)