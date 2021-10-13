const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const {
    taskSid,
    to,
    from,
  } = event

  const client = context.getTwilioClient()

  const participantsResponse = await client.conferences(taskSid).
    participants.
    create({
      to,
      from,
      earlyMedia: true,
      endConferenceOnExit: false,
    })

  callback(null, utils.response('json', participantsResponse))
})