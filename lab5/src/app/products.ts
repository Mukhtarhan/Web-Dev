export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  image_url: string;
  kaspi_link: string;
  likes: number;
  cat: number;
}
export function add_like(liked_product: Product)
{
  liked_product.likes += 1;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128Gb черный',
    price: 373590,
    description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    likes: 2578,
    cat: 1
  },
  {
    id: 2,
    name: 'Apple iPhone 14 128Gb черный',
    price: 420608,
    description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3279 мАч',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
    likes: 45942,
    cat: 1
  },
  {
    id: 3,
    name: 'Apple iPhone 13 128Gb синий',
    price: 378940,
    description: 'технология NFC: Да цвет: синий тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    likes: 232432,
    cat: 1
  },
  {
    id: 4,
    name: 'Apple iPhone 13 128Gb белый',
    price: 372708,
    description: 'технология NFC: Да цвет: белый тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    likes: 132842,
    cat: 1
  },
  {
    id: 5,
    name: 'Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 628816,
    description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3125 мАч',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    likes: 231832,
    cat: 1
  },
  {
    id:6,
    name: 'Hochland творожный сливочный 60% 220 г',
    price: 1104,
    description: 'вид: творожный сорт: сливочный фасовка: в ванночке страна производства: Россия условия хранения: при температуре от +2\'С до +8\'С',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hc1/47118819754014/hochland-tvoroznyj-slivocnyj-60-220-g-101176969-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/syr-hochland-tvorozhnyi-slivochnyi-60-220-g-101176969/?c=750000000#!/item',
    likes: 231,
    cat: 2
  },
  {
    id:7,
    name: 'Брест-Литовск полутвердый сливочный 50% 200 г',
    price: 1169,
    description: 'вид: полутвердый сорт: сливочный фасовка: кусок страна производства: Беларусь',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/hfa/46860061212702/syr-brest-litovsk-slivochnyi-polutverdyi-50-200-g-102726660-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/syr-brest-litovsk-polutverdyi-slivochnyi-50-200-g-102726660/?c=750000000#!/item',
    likes: 1234,
    cat: 2
  },
  {
    id:8,
    name: 'Hochland фетакса плавленый 45% 200 г',
    price: 999,
    description: 'вид: плавленый сорт: фета фасовка: в ванночке страна производства: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h1c/47119144714270/hochland-plavlenyj-fetaksa-45-200-g-101176635-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/syr-hochland-fetaksa-plavlenyi-45-200-g-101176635/?c=750000000#!/item',
    likes: 6786,
    cat: 2
  },
  {
    id:9,
    name: 'Сырный продукт СЫРОВАРОВ полутвердый сметанковый 50%',
    price: 1627,
    description: 'вид: полутвердый сорт: сметанковый фасовка: кусок страна производства: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h14/51955826524190/syr-syrovarov-smetankovyi-syrnyi-produkt-slivochnyi-50-103086554-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/syrnyi-produkt-syrovarov-polutverdyi-smetankovyi-50-103086554/?c=750000000#!/item',
    likes: 2352,
    cat: 2
  },
  {
    id:10,
    name: 'Брест-Литовск полутвердый голландский 45% 200 г',
    price: 1240,
    description: 'вид: полутвердый сорт: голландский фасовка: кусок страна производства: Беларусь',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h0d/46860079726622/syr-brest-litovsk-gollandskii-polutverdyi-45-200-g-102726726-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/syr-brest-litovsk-polutverdyi-gollandskii-45-200-g-102726726/?c=750000000#!/item',
    likes: 1412,
    cat: 2
  },
  {
    id:11,
    name: 'Cvetogis 3K роза 21 шт 50 см',
    price: 23000,
    description: 'тип: букет вид цветов: роза количество цветов: 21 упаковка: крафт-бумага',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h9b/34387652083742/cvetogis-3k-krasnye-rozy-21-st-101282721-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/cvetogis-3k-roza-21-sht-50-sm-101282721/?c=750000000#!/item',
    likes: 1412,
    cat: 3
  },
  {
    id:12,
    name: 'Kazarin flowers 0017 7 шт 40 см',
    price: 8900,
    description: 'тип: букет вид цветов: альстремерия, ,гвоздика, ,гербера, ,роза, ,хризантема количество цветов: 7 упаковка: сумка',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/hfd/62199737417758/cvety-106317213-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/kazarin-flowers-0017-7-sht-40-sm-106317213/?c=750000000#!/item',
    likes: 2134,
    cat: 3
  },
  {
    id:13,
    name: 'DI Flowers Studio Рассветное солнце гербера, роза, хризантема 7 шт 30 см',
    price: 10700,
    description: 'тип: букет вид цветов: гербера, ,роза, ,хризантема количество цветов: 7 упаковка: пленка',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h97/62625922383902/di-flowers-studio-rassvetnoe-solnce-rozovyj-7-st-102752854-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/di-flowers-studio-rassvetnoe-solntse-gerbera-roza-hrizantema-7-sht-30-sm-102752854/?c=750000000#!/item',
    likes: 9876,
    cat: 3
  },
  {
    id:14,
    name: 'Cvetogis 19K микс роз 21 шт 60 см',
    price: 33000,
    description: 'тип: букет вид цветов: роза количество цветов: 21 упаковка: крафт-бумага',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/heb/33967742320670/cvetogis-kustovye-rozy-miks-21-st-101079491-1-Container.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/cvetogis-19k-miks-roz-21-sht-60-sm-101079491/?c=750000000#!/item',
    likes: 7876,
    cat: 3
  },
  {
    id:15,
    name: 'Ajour Flowers AJ071 15 шт 50 см',
    price: 14900,
    description: 'тип: композиция вид цветов: роза, ,хризантема, ,ромашка количество цветов: 15 упаковка: крафт-бумага',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h06/63411277037598/kompozicia-cvetov-106971241-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/ajour-flowers-aj071-15-sht-50-sm-106971241/?c=750000000#!/item',
    likes: 6722,
    cat: 3
  },
  {
    id:16,
    name: 'СИБРТЕХ шпагат 93876 100 м, джут',
    price: 548,
    description: 'длина, м: 100 диаметр: 1.5 мм материал: джут цвет: коричневый страна-производитель: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h07/49749113536542/spagat-dzutovyj-2h-nitocnyj-100-m-sibrteh-93876-104323983-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/sibrteh-shpagat-93876-100-m-dzhut-104323983/?c=750000000#!/item',
    likes: 12,
    cat: 4
  },
  {
    id:17,
    name: 'СИБРТЕХ 93950 20 м, полипропилен',
    price: 252,
    description: 'длина, м: 20 диаметр: 4 мм материал: полипропилен цвет: зеленый страна-производитель: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h42/50433649639454/sibrteh-93950-20-m-polipropilen-104693761-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/sibrteh-93950-20-m-polipropilen-104693761/?c=750000000#!/item',
    likes: 67,
    cat: 4
  },
  {
    id:18,
    name: 'СибШнур АС2708 10 м, джут',
    price: 1100,
    description: 'длина, м: 10 диаметр: 8 мм материал: джут цвет: коричневый страна-производитель: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h77/66578022137886/sibshnur-as2708-10-m-dzhut-107924423-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/sibshnur-as2708-10-m-dzhut-107924423/?c=750000000#!/item',
    likes: 55,
    cat: 4
  },
  {
    id:19,
    name: 'СИБРТЕХ 93986 60 м, полипропилен',
    price: 174,
    description: 'длина, м: 60 диаметр: 1.4 мм материал: полипропилен цвет: желтый страна-производитель: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h78/50433398243358/sibrteh-93986-60-m-polipropilen-104693713-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/sibrteh-93986-60-m-polipropilen-104693713/?c=750000000#!/item',
    likes: 99,
    cat: 4
  },
  {
    id:20,
    name: 'Palisad 937145 25 м, полипропилен',
    price: 462,
    description: 'длина, м: 25 диаметр: 5 мм материал: полипропилен цвет: синий страна-производитель: Россия',
    rating: '5/5',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h63/52766926897182/snur-belevoj-polipropilenovyj-s-serdecnikom-5-mm-l-25-m-cvetnoj-home-palisad-105969430-1.jpg',
    kaspi_link: 'https://kaspi.kz/shop/p/palisad-937145-25-m-polipropilen-105969430/?c=750000000#!/item',
    likes: 87,
    cat: 4
  },
];
