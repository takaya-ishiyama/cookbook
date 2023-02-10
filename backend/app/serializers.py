from dataclasses import fields
from rest_framework import serializers
from .models import CookItem, CookBook
from accounts.serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 

class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data

class CookBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookBook
        fields = '__all__'


class CookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookItem
        fields = '__all__'
