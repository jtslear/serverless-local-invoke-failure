'use strict';
module.exports.hello = (event, context, callback) => {
  callback('fail', { message: 'fail', event });
};
