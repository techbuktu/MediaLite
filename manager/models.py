from django.db import models
from django.contrib.auth.models import User 
from django.utils.text import slugify 

# Create your models here.
class ProfileModel(models.Model):
    about = models.TextField(max_length=300)
    link = models.SlugField(max_length=100, blank=True)
    date_reg = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True
        ordering = ['-date-reg',]

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        if not self.link:
            self.link = slugify(self.user.username)
        super(Editor, self).save(*args, **kwargs)


class Editor(ProfileModel):
    user = models.OneToOneField(User, related_name="editor", on_delete=models.CASCADE)


class Writer(ProfileModel):
    user = models.OneToOneField(User, related_name="writer")
    editor = models.ForeignKey(
        Editor,
        related_name="writers",
        on_delete=models.CASCADE
        )

