import factory
from app.models import CookItem
import random

class CookItemFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = CookItem

    item = factory.Faker('text', max_nb_chars=50)
    quantity = factory.LazyFunction(lambda: random.randint(0, 9999))
    unit = factory.LazyFunction(lambda: random.randint(0, 6))
    
    def create(cls, **kwargs):
        cookitem = super().create(**kwargs)
        return cookitem