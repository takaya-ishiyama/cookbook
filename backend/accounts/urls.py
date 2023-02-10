from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name='accounts'
urlpatterns=[
    path('api/update/<int:pk>/', views.UserUpdateView.as_view(),name="userupdate"),
    path('api/create/', views.UserCreateView.as_view(),name="usercreate"),
    path('api/detail/', views.UserDetailView.as_view(), name="user_detail"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]