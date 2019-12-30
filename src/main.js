// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var modal = document.querySelector('.modal')
var trigger = document.querySelector('.trigger')
var closeButton = document.querySelector('.close-button')
function toggleModal () {
  modal.classList.toggle('show-modal')
}

function windowOnClick (event) {
  if (event.target === modal) { toggleModal() }
}
trigger.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
window.addEventListener('click', windowOnClick)
