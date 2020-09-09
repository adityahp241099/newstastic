from django.shortcuts import render
from rest_framework import generics
from .models import Article, Category
from . serializers import ArticleSerializer,CategoryListSerializer
# Create your views here.
class ListPostsAPI(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
class ViewCategoryAPI(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer
class ViewPostAPI(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
