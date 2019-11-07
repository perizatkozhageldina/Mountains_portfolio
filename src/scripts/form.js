import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'

Vue.use(SimpleVueValidation)

import { Validator } from 'simple-vue-validator'

new Vue({
  el: '#form-component',
  template: '#contact-form-template',
  mixins: [require('simple-vue-validator').mixin],
  data() {
    return {
      user: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  components: {
    errorTooltip: () => import('./common/errorTooltip.vue')
  },
  validators: {
    'user.name': (value) => {
      return Validator.value(value).required('Введите имя')
    },
    'user.email': (value) => {
      return Validator.value(value)
        .required('Введите Email')
        .email('Email введен неверно')
    },
    'user.message': (value) => {
      return Validator.value(value)
        .required('Введите сообщение')
        .minLength(20, 'Длина сообщения должна быть минимум 20 символов')
    }
  },
  methods: {
    async sendMessage() {
      if (await this.$validate()) {
        console.log('Валидация пройдена, отправка сообщения...')

        let request = this.ajaxForm()

        request.addEventListener('load', function() {
          if (request.status >= 400) {
            console.log(`Произошла ошибка ${request.response.message}`)
          } else {
            console.log('Сообщение отправлено', request.response.message)
          }
        })

        return
      }

      console.error('Валидация не пройдена')
    },
    ajaxForm() {
      const formData = new FormData()
      formData.append('name', this.user.name)
      formData.append('email', this.user.email)
      formData.append('message', this.user.message)
      const url = 'https://webdev-api.loftschool.com/sendmail'
      const mail = 'my@mail.com'
      formData.append('to', mail)

      const xhr = new XMLHttpRequest()
      xhr.responseType = 'json'
      xhr.open('POST', url)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      xhr.send(formData)

      return xhr
    }
  },
  updated() {
   console.log(this.validation)
    
  }
})