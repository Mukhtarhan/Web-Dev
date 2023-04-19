from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Company, Vacancy


# Create your views here.
def index(request):
    return HttpResponse('Check')


def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def about_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as err:
        return JsonResponse({'massage': str(err)}, status=400)


def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancies.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as err:
        return JsonResponse({'massage': str(err)}, status=400)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def about_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json())
    except vacancy.DoesNotExist as err:
        return JsonResponse({'massage': str(err)}, status=400)


def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
