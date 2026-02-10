from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (
    RegisterUserView,
    UserProfileView,
    CreateTrainerView,
    TrainerUsersView,
    AddDailyUpdateView,
    UserUpdatesView,
)

urlpatterns = [
    # Auth
    path("register/", RegisterUserView.as_view()),
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # User
    path("profile/", UserProfileView.as_view()),
    path("user/updates/", UserUpdatesView.as_view()),

    # Trainer
    path("trainer/create/", CreateTrainerView.as_view()),
    path("trainer/users/", TrainerUsersView.as_view()),
    path("trainer/daily-update/", AddDailyUpdateView.as_view()),
]
