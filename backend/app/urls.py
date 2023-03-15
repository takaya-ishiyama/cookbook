from django.urls import path, include
from . import views

# app_name='app'

urlpatterns=[
    path('api/cookbook/update/<int:cookbook_id>/', views.CookBookUpdateView.as_view(),name="cookbook_update"),
    path('api/cookbook/create/', views.CookBookCreateView.as_view(),name="cookbook_create"),
    path('api/cookbook/list/', views.CookBookListView.as_view(), name="cookbook_detail"),
]
