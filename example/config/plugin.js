'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  auth: {
    enable: true,
    package: 'egg-router-auth'
  }
};
