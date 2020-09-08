from django.urls import include, path
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)
from . views import *

urlpatterns = [
    path("list/",ListPostsAPI.as_view(),name='newsarticle-list'),
    path("category/",ViewCategoryAPI.as_view(),name='newsarticle-category')
]
