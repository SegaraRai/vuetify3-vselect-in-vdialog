import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import App from './App.vue';

import 'vuetify/styles';

createApp(App)
  .use(
    createVuetify({
      theme: {
        defaultTheme: 'dark',
      },
      display: {
        thresholds: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
          xxl: 2560,
        },
      },
    })
  )
  .mount('#app');
