from django.db import models

# Create your models here.
class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"
    label = models.TextField("Category")
    @property
    def articles(self):
        return Article.objects.filter(category=self)
    def __str__(self):
        return self.label
class Article(models.Model):
    category = models.ForeignKey(Category,on_delete=models.DO_NOTHING)
    title = models.TextField("Title")
    author = models.TextField("Author",default="AP")
    body = models.TextField("Article Body")
