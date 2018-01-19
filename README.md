# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

##Task 2
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
