'use strict';
module.exports.hello = (event, context, callback) => {
  callback(new Error('fail'), { message: 'fail', event });
};
