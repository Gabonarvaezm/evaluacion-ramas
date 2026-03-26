from django.shortcuts import render
from django.views.generic import TemplateView

class verIndex(TemplateView):
    template_name = 'index.html'