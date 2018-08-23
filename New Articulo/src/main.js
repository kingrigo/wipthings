import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './firebase';
import VueFire from 'vuefire';
import FileUploadWithPreview from 'file-upload-with-preview';

Vue.use(VueFire);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
