from rest_framework import serializers
from .models import Article,Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = []

class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)
    class Meta:
        model = Article
        exclude = []
class CategoryTodayListSerializer(serializers.ModelSerializer):
    paperArticles = ArticleSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id','label','paperArticles']

class CategoryListSerializer(serializers.ModelSerializer):
    articles = ArticleSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id','label','articles']
