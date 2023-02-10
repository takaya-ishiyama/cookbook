from .models import User
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated


class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

class UserUpdateView(generics.UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    queryset=User.objects.all()

class UserCreateView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    queryset=User.objects.all()

