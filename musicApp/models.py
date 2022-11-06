from django.db import models

# Create your models here.
class music_student(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 100)
    sex = models.CharField(max_length = 10)
    course = models.CharField(max_length = 100)
    email = models.EmailField()
    feedback = models.CharField(max_length = 200)

    def __str__(self) -> str:
        return self.name + str(self.id)