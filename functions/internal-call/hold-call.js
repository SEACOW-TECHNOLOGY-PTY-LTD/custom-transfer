const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const client = context.getTwilioClient()
  const { conference, participant, hold } = event

  if (conference && participant && hold) {
    await client.conferences(conference).participants(participant).update({
      hold,
    })
  }
  callback(null, utils.response('json', {}))
})