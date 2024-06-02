
import "@/styles/settings.scss";
import "@mdi/font/css/materialdesignicons.css";

// Composables
import { createVuetify } from 'vuetify'


const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#000000",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  /* 
  theme: {
    light: {
      colors: {
        primary: "#1867C0",
        secondary: "#5CBBF6",
      },
    },
  }, */
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});