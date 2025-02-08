from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import test_view  # 導入視圖函數


urlpatterns = [
    path('', include('news_generator.urls')),  # 這會包含 news_generator 應用的所有 URL
    path('', include('news_storyboard.urls')),  # 這會包含 news_storyboard 應用的所有 URL
    path('test/', test_view, name='test')  # 新增的測試路由
] 