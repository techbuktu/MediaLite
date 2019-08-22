from django.contrib import admin
from manager.models import (Editor, Writer)


# Register your models here.
admin.site.register(Editor, admin.ModelAdmin)
admin.site.register(Writer, admin.ModelAdmin)
