from django.apps import AppConfig


class NewsarticleConfig(AppConfig):
    name = 'newsarticle'
    # def ready(self):
    #     from . import models
    #     from django.utils.timezone import datetime
    #     qs = models.Category.objects.filter(article__posted_on__date=datetime.today())
    #     print(qs.query)
