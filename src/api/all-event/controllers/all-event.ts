/**
 * all-event controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::all-event.all-event',({ strapi }) => ({
    async find(ctx) {
    
      ctx.query.fields = ["titleEvent", "dateEvent", "dateTitle"]
      ctx.query.populate = {
          eventImage: {
            fields: ['url'],
          },
        };
  
      // Gunakan service bawaan Strapi untuk mengambil data
      const events = await strapi.entityService.findMany('api::all-event.all-event', ctx.query);
  
      return events;
    },
  }));
