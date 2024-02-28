from django.urls import path
from .views import UpdateStaffUserView, CreateUserView

urlpatterns = [
    path('signup/', CreateUserView.as_view(), name="create_user"),
    path('', UpdateStaffUserView.as_view(), name="update_profile"),
]
