import Vue from 'vue'
import App from './App.vue'

(function(array) {
  console.log(array.filter(a => a % 2 === 0))
})([1, 2, 3, 4, 5])
new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App),
})
