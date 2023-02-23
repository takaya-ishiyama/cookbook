from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from accounts.models import User
from .models import CookBook, CookItem
from .serializers import CookBookSerializer, CookBookPostSerializer, CookItemSerializer

class CookBookTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='www', password='www'
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)
        self.cookbook_data = {
            'title': 'Test CookBook',
            'url': 'https://testurl.com',
            'memo': 'Test memo',
            'user_id': self.user.pk,
            'cookitem': [
                {
                    'item': 'Test item 1',
                    'quantity': 100,
                    'unit': 0
                },
                {
                    'item': 'Test item 2',
                    'quantity': 2,
                    'unit': 3
                }
            ]
        }
        self.response = self.client.post(
            reverse('cookbook_create'),
            self.cookbook_data,
            format='json'
        )
        
    def test_create_cookbook(self):
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_get_cookbook(self):
        cookbook = CookBook.objects.get(pk=self.response.data['cookbook_id'])
        serializer = CookBookSerializer(cookbook)
        self.assertEqual(self.response.data, serializer.data)
        

class CookItemTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser', password='testpass123'
        )
        self.cookbook = CookBook.objects.create(
            title='Test CookBook',
            url='https://testurl.com',
            memo='Test memo',
            user=self.user
        )
        self.cookitem_data = {
            'item': 'Test item',
            'quantity': 100,
            'unit': 0,
            'cookbook': self.cookbook
        }
        self.cookitem = CookItem.objects.create(**self.cookitem_data)

    def test_cookitem_str(self):
        self.assertEqual(str(self.cookitem), self.cookitem.item)

    def test_cookitem_serializer(self):
        serializer = CookItemSerializer(instance=self.cookitem)
        self.assertEqual(serializer.data['item'], self.cookitem.item)
