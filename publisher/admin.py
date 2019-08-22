from django.contrib import admin
from publisher.models import (Article, Comment)

# Register your models here.
admin.site.register(Article, admin.ModelAdmin)
admin.site.register(Comment, admin.ModelAdmin)