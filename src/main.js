import Vue from 'vue'
import App from './App.vue'



import router from './router/index.js'


Vue.config.productionTip = false



Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
});

Vue.directive('color', {
  inserted(el, binding) {
    //  el.style.color = 'red';
    //  if (binding.value) {
    el.style.color = binding.value;
    //  }
  },
  bind(el, binding) {
    el.style.color = binding.value;
  },
  update(el, binding) {
    el.style.color = binding.value;
  },

});

Vue.directive('loading', {
  inserted(el, binding) {

    binding.value ? el.classList.add('loading') : el.classList.remove('loading');

  },

  update(el, binding) {
    binding.value ? el.classList.add('loading') : el.classList.remove('loading');
  },

});




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
