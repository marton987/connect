/**
 * Module dependencies
 */

var Redis = require('ioredis')

/**
 * Get client
 */

var client

exports.getClient = function () {
  if (client) {
    return client
  } else {
    client = new Redis({
      'host': process.env.REDIS_HOST || 'localhost',
      'port': process.env.REDIS_PORT || '6379',
      'password': process.env.REDIS_PASSWORD || ''
    })
    return client
  }
}
