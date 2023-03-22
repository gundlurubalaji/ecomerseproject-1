'use strict';

/**
 * firegame service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::firegame.firegame');
