from django.shortcuts import render
from rest_framework import generics
from .models import Article, Category
from . serializers import *
from django.utils.timezone import datetime
# Create your views here.
class LiveAPI(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
class ListCategoryAPI(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class ViewNewspaperAPI(generics.ListAPIView):
    queryset = Category.objects.filter(article__posted_on__date=datetime.today())
    serializer_class = CategoryListSerializer
class ViewPostAPI(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
