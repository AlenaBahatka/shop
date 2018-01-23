# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Task 1
https://github.com/AlenaBahatka/angular5Training/tree/Task1

## Task 2
`additional: ` Добавлено input поле для feedback. two-way binding. background комментария меняет цвет при mouseevent. send comment логирует это сообщение в консоль
1. Создать приложение Angular (интернет магазин), которое состоит из двух или более модулей (AppModule, CartModule, ProductsModule, OrdersModule, ...), используя Angular-CLI
2. Содать или модифицировать компонент, который отображает список товаров (ProductListComponent). 
   Товары компоненту предоставить с помощью сервиса ProductService.
   Создать модель сущности. Использовать одно-два необязательных полей. Интерфейс + Класс. 
   Реализовать возможность добавления товара в корзину (click).
2. Создать или модифицировать компонент, который отображает список купленных товаров (CartList). Отображать количество купленных товаров и общую сумму.
4. Создать компонент, который отображает одну сущность из списка выше (СartItem). Реализовать возможность изменить свойство сущности (quantity), удалить сущность. 
5. По возможности использовать декораторы: @Input(), @Output().
6. По возможности использовать два или более метода-хука жизненого цикла компонента
7. Использовать DOM событие (click, wheel, blur...).
8. Создать или модифицировать сервис (CartService) для предоставления данных компонентам, подсчета количества и суммы.
9. В качестве демо попробовать использовать #variable и @ViewChild и получить доступ к DOM элементу темплейта, методам(свойствам) дочернего компонента.
10. При наведении мышки или клике на пункт списка (CartItem) стилизировать его изменением фона. Использовать @HostBinding, @HostListener декораторы.
11. По возможности применить директиву ngClass или ngStyle. Например, если товара нет в наличии, то как-то иначе стилизировать кнопку добавления в корзину.
12. Описать (в ридми) и реализовать свою небольшую функциональность.

## Task 3 ( Services and DI )
1. Создайте/модифицируйте сервис `CartService`, который будет содержать данные корзины интернет магазина и управлять содержимым.
	Сервис должен хранить информацию: 
		- о добавленных товарах в корзину
		- общее количество товаров в корзине
		- общую сумму товаров в корзине
	Сервис должен предоставлять следующий функционал:
		- добавить в корзину товар с количеством
		- удалить указанный товар из корзины
		- увеличить/уменьшить количество для указаного товара
		- очистить корзину
		пересчитать общее количество товара и сумму после каждой операции, которая влияет на корзину
2. Создайте сервис `LocalStorageService`, который позволит работать с localStorage (как класс). Он должен предоставлять методы для:
	- установки значения (setItem)
	- получения значения (getItem)
	- удаления значения (removeItem)
3. Создайте сервис `ConfigOptionsService`, который должен хранить объект настроек, который  приходит ему на вход, например login, id, email.  
4. Создайте сервис `ConstantsService`, который должен возвращать объект констант, 
   например { App: "TaskManager", Ver: "1.0" }. Зарегистрируйте его, используя useValue.
5. Создайте сервис `GeneratorService`, который должен генерировать случайную последовательность символов длины n 
   из набора a-z, A-Z, 0-9 (n - здается при регистрации сервиса). Зарегистрируйте сервис используя useFactory.
6. Внедрите перечисленные выше сервисы в компоненты. Используйте декоратор @Optional().
7. Напишите директиву, которая добавляет обработчик события click к хост элементу. 
   Клик изменяет размер шрифта элемента, рамку или что-то другое на Ваше усмотрение. 
   Добавьте @Input() для директивы. Используйте ElementRef/Renderer2

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
