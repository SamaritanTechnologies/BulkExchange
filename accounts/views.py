from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import generic

from accounts.forms import SignUpForm
from accounts.models import User


from django.shortcuts import redirect


class UpdateStaffUserView(LoginRequiredMixin, generic.UpdateView):
    template_name = "accounts/update_user.html"
    model = User
    fields = ['first_name', 'last_name', 'phone_number']

    def get_object(self, queryset=None):
        return self.request.user

    def get_success_url(self):
        message = messages.success(request=self.request, message="Profile has been updated")
        return reverse('update_profile')

    def form_invalid(self, form):
        message = messages.error(request=self.request, message=form.errors)
        return redirect('update_profile')


class CreateUserView(generic.CreateView):
    template_name = "accounts/signup.html"
    model = User
    form_class = SignUpForm

    def get_success_url(self):
        return reverse('login')

    def form_invalid(self, form):
        message = messages.error(request=self.request, message=form.errors)
        return redirect('create_user')
