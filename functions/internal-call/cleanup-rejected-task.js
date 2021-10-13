const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const taskSid = event.taskSid
  let client = context.getTwilioClient()
  const conferences = await client.conferences.list(
    { friendlyName: taskSid, status: 'in-progress', limit: 20 })
  await Promise.all(conferences.map(conference => {
    return client.conferences(conference.sid).update({ status: 'completed' })
  }))
  callback(null, utils.response('json', {}))
})