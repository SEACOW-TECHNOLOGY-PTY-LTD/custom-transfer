const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const {
    callSid,
  } = event

  const client = context.getTwilioClient()

  const callProperties = await client.calls(callSid).fetch()

  callback(null, utils.response('json', callProperties))
})