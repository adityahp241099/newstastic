from django.db import models
from django.utils import timezone
import datetime
# Create your models here.
class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"
    label = models.TextField("Category")
    icon = models.TextField("Icon as per material.io",default='news')
    #Use article in filter
    @property
    def articles(self):
        return Article.objects.filter(category=self)
    @property
    def paperArticles(self):
        return Article.objects.filter(category=self,posted_on__gt=timezone.datetime.today()-datetime.timedelta(days=1),posted_on__lt=timezone.datetime.today())
    def __str__(self):
        return self.label
class Article(models.Model):
    category = models.ForeignKey(Category,on_delete=models.DO_NOTHING)
    title = models.TextField("Title")
    author = models.TextField("Author",default="AP")
    preview = models.CharField("Preview to be displayed",max_length=140)
    body = models.TextField("Article Body")
    posted_on = models.DateTimeField("Date Time of Posting",default = timezone.now)
    def __str__(self):
        return f"{self.title} - {self.author} on {self.posted_on}"
