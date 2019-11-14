<template lang="pug">
  wrapper
    .login-page
      .container
        form.login-form
          a(href="/").close-btn
          .auth 
            .auth__title Авторизация
            label.form__block
                .form__title.section-text Логин
                .input-block
                    .input-icon.input-icon--login
                    input.form__input(type="text", placeholder="Admin")
            label.form__block
                .form__title.section-text Пароль
                .input-block
                    .input-icon.input-icon--pass
                    input.form__input(type="password")
            .auth-btn Отправить
    .about
      header.admin-header
        .container
          .admin-header__info
            .admin-header__user
              .admin-header__pic
                img(src="../images/content/perizat.png").admin-header__avatar
              .admin-header__name Перизат Кожагельдина
            .admin-header__panel Панель администрирования
          a(href="/").admin-header__exit Выйти
      .admin__nav
        .container
          ul.tabs__list
            li.tabs__item.active Обо мне
            li.tabs__item Работы
            li.tabs__item Отзывы
      .about__content
        .container
          .block__title
            .block__text Блок «Обо мне»
            .about__add-text Добавить группу
            .add-btn +
          .about__blocks
            .about__block.group-block
              .group-block__header
                input.group-block__name(placeholder="Название новой группы").editing
                .group-block__btns.newblock
                  .group-block__tick
                  .group-block__cross
              .group-block__content
              .group-block__footer
                input(placeholder="Новый навык").group-block__newskill
                .group-block__value
                  input(type="number" min="1" max="100" step="1").group-block__number
                  .group-block__percent %
                .group-block__add-btn.add-btn +
            .about__block.group-block
              .group-block__header
                input.group-block__name(value="Workflow").editing
                .group-block__btns.editing
                  .btns__pencil.name__pencil
                  .group-block__tick
                  .group-block__cross
              .group-block__content
                ul.skills__list
                  li.skills__item
                    input.skills__name(value="Git")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="100").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                  li.skills__item
                    input.skills__name(value="Terminal")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="90").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                  li.skills__item
                    input.skills__name(value="Gulp")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="80").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                  li.skills__item
                    input.skills__name(value="Webpack")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="85").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
              .group-block__footer
                input(placeholder="Новый навык").group-block__newskill
                .group-block__value
                  input(type="number" min="1" max="100" step="1").group-block__number
                  .group-block__percent %
                .group-block__add-btn.add-btn +
            .about__block.group-block
              .group-block__header
                input.group-block__name(value="Frontend")
                .group-block__btns
                  .btns__pencil.name__pencil
                  .group-block__tick
                  .group-block__cross
              .group-block__content
                ul.skills__list
                  li.skills__item
                    input.skills__name(value="HTML5")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="100").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                      .btns__edit.group-block__btns
                        .btns__tick.group-block__tick
                        .btns__cross.group-block__cross
                  li.skills__item.editing
                    input.skills__name(value="CSS3")
                    .group-block__value
                      input(type="number" min="1" max="100" step="1" value="90").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                      .btns__edit.group-block__btns
                        .btns__tick.group-block__tick
                        .btns__cross.group-block__cross
                  li.skills__item
                    input.skills__name(value="JavaScript")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="80").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                      .btns__edit.group-block__btns
                        .btns__tick.group-block__tick
                        .btns__cross.group-block__cross
                  li.skills__item
                    input.skills__name(value="JQuery и Vue.js")
                    .skills__value.group-block__value
                      input(type="number" min="1" max="100" step="1" value="85").group-block__number
                      .group-block__percent %
                    .skills__btns
                      .btns__default.group-block__btns
                        .btns__pencil
                        .btns__remove
                      .btns__edit.group-block__btns
                        .btns__tick.group-block__tick
                        .btns__cross.group-block__cross
              .group-block__footer
                input(placeholder="Новый навык").group-block__newskill
                .group-block__value
                  input(type="number" min="1" max="100" step="1").group-block__number
                  .group-block__percent %
                .group-block__add-btn.add-btn +
    
    .works
      header.admin-header
        .container
          .admin-header__info
            .admin-header__user
              .admin-header__pic
                img(src="../images/content/perizat.png").admin-header__avatar
              .admin-header__name Перизат Кожагельдина
            .admin-header__panel Панель администрирования
          a(href="/").admin-header__exit Выйти
      .admin__nav
        .container
          ul.tabs__list
            li.tabs__item Обо мне
            li.tabs__item.active Работы
            li.tabs__item Отзывы
      .works__content
        .container
          .block__title
            .block__text Блок "Работы"
          .works__blocks
            .works__new-block.new-block
              .new-block__title Редактирование работы
              .new-block__content 
                .new-block__upload-img
                  .new-block__upload-text Перетащите или нажмите для загрузки изображения
                  label.new-block__upload-block
                    .new-block__upload-title.btn Загрузить
                    input(type="file").new-block__upload-btn
                .new-block__info.new-work
                  label.new-work__block
                    .new-work__title Название
                    input.new-work__input
                  label.new-work__block
                    .new-work__title Ссылка
                    input.new-work__input
                  label.new-work__block
                    .new-work__title Описание
                    textarea.new-work__input
                  label.new-work__block
                    .new-work__title Добавление тега
                    input.new-work__input
                  .new-block__btns
                    .new-block__cancel Отмена
                    .new-block__save.btn Сохранить
            .works__grid-blocks 
              .works__new-grid-block
                .works__plus +
                .works__add-work Добавить работу
              .works__grid-block.editing
                .grid-block__img
                  img(src="src/images/content/slide1.png").avatar__pic
                .grid-block__content
                  .grid-block__title Сайт школы образования
                  .grid-block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .grid-block__link http://loftschool.ru
                  .grid-block__btns
                    .grid-block__edit Править
                    .grid-block__remove Удалить
              .works__grid-block
                .grid-block__img
                  img(src="src/images/content/slide2.png").avatar__pic
                .grid-block__content
                  .grid-block__title Сайт школы образования
                  .grid-block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .grid-block__link http://loftschool.ru
                  .grid-block__btns
                    .grid-block__edit Править
                    .grid-block__remove Удалить
              .works__grid-block
                .grid-block__img
                  img(src="src/images/content/slide3.png").avatar__pic
                .grid-block__content
                  .grid-block__title Сайт школы образования
                  .grid-block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .grid-block__link http://loftschool.ru
                  .grid-block__btns
                    .grid-block__edit Править
                    .grid-block__remove Удалить
              .works__grid-block
                .grid-block__img
                  img(src="src/images/content/slide4.png").avatar__pic
                .grid-block__content
                  .grid-block__title Сайт школы образования
                  .grid-block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .grid-block__link http://loftschool.ru
                  .grid-block__btns
                    .grid-block__edit Править
                    .grid-block__remove Удалить
              .works__grid-block
                .grid-block__img
                  img(src="src/images/content/slide5.png").avatar__pic
                .grid-block__content
                  .grid-block__title Сайт школы образования
                  .grid-block__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .grid-block__link http://loftschool.ru
                  .grid-block__btns
                    .grid-block__edit Править
                    .grid-block__remove Удалить


</template>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "./styles/*.pcss";
  @import "../styles/layout/base.pcss";
</style>