from django.shortcuts import render, HttpResponse
from .models import music_student

# Create your views here.
def page(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        sex = request.POST.get('sex')
        course = request.POST.get('course')
        email = request.POST.get('email')
        feedback = request.POST.get('feedback')

        user = music_student.objects.create(name = name, sex = sex, course = course, email = email, feedback = feedback)
        user.save()
    
    return render(request, 'HomePage.html')

def signup(request):
    return render(request, 'SignUp.html')

def about(request):
    return render(request, 'About.html')

def contact(request):
    return render(request, 'Contact.html')

def courses(request):
    return render(request, 'Courses.html')

def piano(request):
    return render(request, 'Piano.html')

def keyboard(request):
    return render(request, 'Keyboard.html')

def guitar(request):
    return render(request, 'Guitars.html')

def drums(request):
    return render(request, 'Drums.html')

def violin(request):
    return render(request, 'Violin.html')