from .models import CookBook, CookItem
from .serializers import CookBookSerializer
from rest_framework import generics
from rest_framework.generics import get_object_or_404

class CookBookListView(generics.ListAPIView):
    serializer_class = CookBookSerializer
    queryset=CookBook.objects.all()

    def get_queryset(self, *args, **kwargs):
        queryset_list = CookBook.objects.all()
        query_user = self.request.GET.get('user')
        if query_user:
            queryset_list = queryset_list.filter(user__id=query_user)
        return queryset_list

class CookBookUpdateView(generics.UpdateAPIView):
    serializer_class = CookBookSerializer
    queryset=CookBook.objects.all()

class CookBookCreateView(generics.ListCreateAPIView):
    serializer_class = CookBookSerializer
    queryset=CookBook.objects.all()
