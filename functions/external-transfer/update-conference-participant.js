const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const {
    conference,
    participant,
    endConferenceOnExit,
  } = event

  const client = context.getTwilioClient()

  const participantResponse = await client.conferences(conference).
    participants(participant).
    update({
      endConferenceOnExit,
    }).
    catch(e => {
      console.error(e)
      return {}
    })

  return callback(null, utils.response('json', participantResponse))
})