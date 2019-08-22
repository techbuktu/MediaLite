from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from publisher.api import views 

app_name = "publisher_api"

urlpatterns = [
    path('articles/', views.ArticleListView.as_view(), name="article_list"),
    path('comments/', views.CommentListAPIView.as_view(), name="comment_list"),
    path('articles/<slug:link>/', views.ArticleDetailView.as_view(), name="article_detail"),
    path('comments/<slug:link>/', views.CommentDetailAPIView.as_view(), name="comment_detail"),
    path('', views.publisher_api_root, name="publisher_api_root")
]

format_suffix_patterns(urlpatterns)