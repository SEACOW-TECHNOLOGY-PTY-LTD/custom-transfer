const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const {
    conference,
    participant,
    hold,
  } = event

  const client = context.getTwilioClient()

  const participantsResponse = await client.conferences(conference).
    participants(participant).
    update({
      hold,
    })

  callback(null, utils.response('json', participantsResponse))
})