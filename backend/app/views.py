from .models import CookBook, CookItem
from .serializers import CookBookSerializer, CookBookPostSerializer, CookItemSerializer
from rest_framework import generics
from rest_framework.generics import get_object_or_404
from django.db.models import Q
from rest_framework import views, status
from rest_framework.response import Response
import json

class CookBookListView(generics.ListAPIView):
    serializer_class = CookBookSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = CookBook.objects.all()
        query_user = self.request.GET.get('user')
        if query_user:
            queryset_list = queryset_list.filter(user__id=query_user)

        return queryset_list

class CookBookUpdateView(generics.UpdateAPIView):
    serializer_class = CookBookSerializer
    queryset=CookBook.objects.all()

class CookBookCreateView(generics.CreateAPIView):
    # serializer_class = CookBookPostSerializer
    # queryset=CookBook.objects.all()
    queryset = CookBook.objects.all()
    
    def create(self, request, *args, **kwargs):
        # JSON 形式のリクエストの内容を取得
        data = request.data

        # CookBook インスタンスを作成
        cookbook = CookBook.objects.create(
            user_id=data.get('user_id'),
            title=data.get('title'),
            url=data.get('url'),
            memo=data.get('memo')
        )

        # cookitem の処理
        cookitem_data = data.get('cookitem')
        for item_data in cookitem_data:
            cookbook.cookitem.create(
                item=item_data.get('item'),
                quantity=item_data.get('quantity'),
                unit=item_data.get('unit')
            )

        return Response(CookBookSerializer(cookbook).data, status=status.HTTP_201_CREATED)    
    
