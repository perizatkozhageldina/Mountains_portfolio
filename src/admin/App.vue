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
      header.header
        .container
          .header__info
            .header__user
              .header__pic
                img(src="../images/content/perizat.png").header__avatar
              .header__name Перизат Кожагельдина
            .header__panel Панель администрирования
          a(href="/").header__exit Выйти
      .about__nav
        .container
          ul.tabs__list
            li.tabs__item.active Обо мне
            li.tabs__item Работы
            li.tabs__item Отзывы
      .about__content
        .about__block.container
          .about__text Блок «Обо мне»
          .about__add-text Добавить группу
      


</template>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "./styles/*.pcss";
  @import "../styles/layout/base.pcss";
</style>