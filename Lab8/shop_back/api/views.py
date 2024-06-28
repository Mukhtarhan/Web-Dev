from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Product, Category


def products_list(request):
    products = Product.objects.all()
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = product.to_json()
    return JsonResponse(data)


def categories_list(request):
    categories = Category.objects.all()
    data = [category.to_json() for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = category.to_json()
    return JsonResponse(data)


def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.product_set.all()
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)