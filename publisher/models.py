from django.db import models
from django.contrib.auth.models import User 
from django.utils import timezone 
from django.utils.text import slugify
from manager.models import Writer 

# Create your models here.
class Article(models.Model):
    writer = models.ForeignKey(
        Writer,
        related_name="articles",
        on_delete=models.CASCADE
        )
    title = models.CharField(max_length=120)
    link = models.SlugField(max_length=140, blank=True)
    body = models.TextField(max_length=1500)
    publish_date = models.DateTimeField(null=True, blank=True)
    publish = models.BooleanField(default=False)

    def __str__(self):
        return "%s" % (self.title)

    def save(self, *args, **kwargs):
        if not self.link:
            self.link = slugify(self.title)
        if self.publish:
            self.publish_date = timezone.now()
        super(Article, self).save(*args, **kwargs)

class Comment(models.Model):
    commenter = models.ForeignKey(
        User, 
        related_name="comments",
        on_delete=models.CASCADE
    )
    article = models.ForeignKey(
        Article,
        related_name="comments",
        on_delete=models.CASCADE
        )
    body = models.TextField(max_length=300)
    comment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Comment by %s 0n %s" % (self.commenter.user.username, self.article.title)

    