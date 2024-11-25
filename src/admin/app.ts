import type { StrapiApp } from "@strapi/strapi/admin";
import favIcon from "./extensions/logo.webp";
export default {
  config: {
    head: {
      favicon: favIcon,
    },
    auth: {
      login: {
        logo: favIcon,
      },
    },
    menu: {
      logo: favIcon,
    },
    translations : {
      en: {
        "Auth.form.welcome.title" : "Welcome to GPdI Shekinah", 
        "Auth.form.welcome.subtitle" : "Log In to your Admin Account " 
      }
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app , 'ini ');
  },
};
