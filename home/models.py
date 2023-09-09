from django.db import models




class FeedBack(models.Model):
    feedback = models.TextField(blank=True, null=True)
