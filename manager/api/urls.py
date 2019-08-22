from django.urls import path 
#Use the format_suffix_patterns() to automatically-accept requests for
#the API response in any 'Content-Type': JSON, XML, etc.
from rest_framework.urlpatterns import format_suffix_patterns 
from manager.api import views 

app_name = "manager_api"

urlpatterns = format_suffix_patterns([
    path('users/', views.UserListView.as_view(), name="user_list"),
    path('editors/', views.EditorListView.as_view(), name="editor_list"),
    path('writers/', views.WriterListView.as_view(), name="writer_list"),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name="user_detail"),
    path('editors/<slug:link>/', views.EditorDetailView.as_view(), name="editor_detail"),
    path('writers/<slug:link>/', views.WriterDetailView.as_view(), name="writer_detail"),
    path('', views.manager_api_root, name="manager_api_root"),
])