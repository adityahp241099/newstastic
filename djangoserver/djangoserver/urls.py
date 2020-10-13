"""djangoserver URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
urlpatterns = [
    path('service-worker.js', (TemplateView.as_view(template_name="service-worker.js",content_type='application/javascript',)), name='service-worker.js'),
    path('manifest.json', (TemplateView.as_view(template_name="manifest.json",content_type='application/javascript',)), name='manifest.json'),
    path('robots.txt', (TemplateView.as_view(template_name="robots.txt",content_type='application/javascript',)), name='robots.txt'),
    path('admin/', admin.site.urls),
    path('api/article/',include('newsarticle.urls')),
    path('',include('reactroute.urls')),
]
