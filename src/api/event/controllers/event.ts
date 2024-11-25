import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::event.event', ({ strapi }) => ({
  async find(ctx) {
    const { category } = ctx.query;

    if (!ctx.query.filters) {
      ctx.query.filters = {};
    }

    if (category && category !== 'all') {
      ctx.query.filters = {
        ...(ctx.query.filters as Record<string, unknown>),
        category: { $eq: category },
      };
    }
    ctx.query.fields = ['id', 'category']
    ctx.query.populate = {
        images: {
          fields: ['url'],
        },
      };

    // Gunakan service bawaan Strapi untuk mengambil data
    const events = await strapi.entityService.findMany('api::event.event', ctx.query);

    return events;
  },
}));
