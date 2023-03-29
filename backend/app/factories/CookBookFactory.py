import factory
from app.models import CookBook
from app.factories import CookItemFactory
# from app.factories.CookItemFactory import create

class CookBookFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = CookBook

    title = factory.Faker('text', max_nb_chars=50)
    memo = factory.Faker('text', max_nb_chars=100)
    url = factory.Faker('url')
    # cookitem = 
    # cookitem = factory.SubFactory(CookItemFactory)
    def create(cls, **kwargs):
        cookbook = super().create(**kwargs)
        cookbook.cookitem.add(CookItemFactory.create())
        return cookbook