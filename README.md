бэм
блок не зависит от реализации других, не должно быть отступов, границ, позиционирования, внешняя геометрия вляющая на размеры

flex это позиционирование, как в примере шапку переносили?

- имя-блока__имя-элемента // - разделяет имя и се

search-form__input //search-form это блок, input это элемент

- имя-блока__имя-элемента_имя-модификатора

search-form__input_disabled // модификатор это цвет, активность, размер, направление

- имя-блока_имя-модификатора
- имя-блока_имя-модификатора_значение-модификатора

search-form_theme_islands

```html
<form class="search-form search-form_focused"> модификатор нельзя продолжать
    <input class="search-form__input">
    <button class="search-form__button search-form__button_disabled">Найти</button>
</form>
```

элемент это часть блока

```html
<div class="block">
    <div class="block__elem1">
        <div class="block__elem2"></div>
    </div>
    <div class="block__elem3"></div>
</div>
```

Элемент — необязательный компонент блока. Не у всех блоков должны быть элементы.

input и button не должны иметь внешней геометрии чтобы переиспользоватся, это блок но при этом html элемент

```html
<!-- Блок `search-form` -->
<div class="search-form">
    <!-- Блок `input` -->
    <input class="input">
    <!-- Блок `button` -->
    <button class="button">Найти</button>
</div>
```

элемент взял css блока

```html
<!-- Блок `header` -->
<div class="header">
    <!-- К блоку `search-form` примиксован элемент `search-form` блока `header`-->
    <div class="search-form header__search-form"></div>
</div>
```

[![Снимок.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a6c5de6-c2e7-48b2-8a20-a0576c5a45eb/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA.png)
](https://file.notion.so/f/s/3a6c5de6-c2e7-48b2-8a20-a0576c5a45eb/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA.png?id=2da130bc-d7a8-4f27-a154-d4adab9c0a61&table=block&spaceId=5393c082-4838-4d3f-af80-523c8a89fde9&expirationTimestamp=1687957817578&signature=xDHvcYywRvTfhTW6EmqSxdD5CbjxgEU2IelxJPq9EVA&downloadName=%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA.PNG.png)https://file.notion.so/f/s/3a6c5de6-c2e7-48b2-8a20-a0576c5a45eb/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA.png?id=2da130bc-d7a8-4f27-a154-d4adab9c0a61&table=block&spaceId=5393c082-4838-4d3f-af80-523c8a89fde9&expirationTimestamp=1687957817578&signature=xDHvcYywRvTfhTW6EmqSxdD5CbjxgEU2IelxJPq9EVA&downloadName=%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA.PNG.png

// ------------------------------------------------------------------------------------------------
```html
body.body
	.container
	.container.container-black
	.container#something
```

```html
nav.header__nav
	ul
		li: a(href="#") Home
		li: a(hfer="#") About
для одного
```

```html
p Lorem <strong>adipisicing</strong> Praesentium <a href="">Minima delectus</a><br>Quos
```

```html
p Lorem #[strong adipisicing] Praesentium #[a(href="") Minima delectus] #[br]Quos
```

append head

script()

block head

script()
