from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, ProductsByCategory

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:pk>/products/', ProductsByCategory.as_view(), name='products-by-category'),
]
