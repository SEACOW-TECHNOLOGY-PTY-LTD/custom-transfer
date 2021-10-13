const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const contacts = [
    {
      sid: 'directory1',
      fullName: 'Ran Tao',
      phone: '+61280068818',
    },
    {
      sid: 'directory2',
      fullName: 'Anant Chitale',
      phone: '+61433102802',
    },
    {
      sid: 'directory3',
      fullName: 'Anna Zawada',
      phone: '+61448488321',
    }
  ]

  callback(null, utils.response('json', contacts))
})