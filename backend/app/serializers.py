from rest_framework import serializers
from .models import CookItem, CookBook
from accounts.serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from .models import CookItem
from accounts.models import User

class CookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookItem
        # fields = ('cookitem_id','item','quantity','unit','cookbook')
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
        # fields='__all__'

    # def create(self, validated_data):
    #     cookitems_data = validated_data.pop('cookitem', [])
    #     validated_data['user'] = validated_data.get('user_id', None)
    #     if validated_data['user'] is None:
    #         raise serializers.ValidationError("user not found.") 
    #     del validated_data['user_id']
    #     cookbook = CookBook.objects.create(**validated_data)
    #     for cookitem_data in cookitems_data:
    #         CookItem.objects.create(cookbook=cookbook, **cookitem_data)
    #     return cookbook
    
    # def update(self, instance, validated_data):
    #     cookitem_data = validated_data.pop('cookitem', [])
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.url = validated_data.get('url', instance.url)
    #     instance.memo = validated_data.get('memo', instance.memo)
    #     instance.save()

    #     current_ids = [item.id for item in instance.cookitem.all()]
    #     new_ids = [item['id'] for item in cookitem_data if 'id' in item]
    #     ids_to_delete = set(current_ids) - set(new_ids)
    #     for item_id in ids_to_delete:
    #         CookItem.objects.get(id=item_id).delete()

    #     for item_data in cookitem_data:
    #         if 'id' in item_data:
    #             item = CookItem.objects.get(id=item_data['id'])
    #             item.name = item_data.get('name', item.name)
    #             item.quantity = item_data.get('quantity', item.quantity)
    #             item.save()
    #         else:
    #             CookItem.objects.create(cookbook=instance, **item_data)

    #     return instance