const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const client = context.getTwilioClient()

  const workers = await client.taskrouter.workspaces(
    context.TWILIO_WORKSPACE_SID).
    workers.
    list()

  const result = []

  workers.forEach(elem => {
    result.push({
      activityName: elem.activityName,
      attributes: JSON.parse(elem.attributes),
      available: elem.available,
      sid: elem.sid,
    })
  })

  callback(null, utils.response('json', result))
})