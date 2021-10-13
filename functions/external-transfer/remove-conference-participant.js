const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const {
    conference,
    participant,
  } = event

  const client = context.getTwilioClient()

  const participantResponse = await client.conferences(conference).
    participants(participant).
    remove()

  return callback(null, utils.response('json', participantResponse))
})