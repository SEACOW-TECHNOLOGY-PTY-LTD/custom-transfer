const TokenValidator = require('twilio-flex-token-validator').functionValidator

let path = Runtime.getFunctions()['utils'].path
let utils = require(path)

exports.handler = TokenValidator(async (context, event, callback) => {
  const contacts = [
    { sid: 'directory1', fullName: 'Anna Zawada', phone: '+61287902722' },
    {
      sid: 'directory2',
      fullName: 'Anna Zawada - Mobile',
      phone: '+61448488321',
    },
    {
      sid: 'directory3',
      fullName: 'Sam - Repair Centre',
      phone: '+61287902727',
    },
    { sid: 'directory4', fullName: 'Sam - RC Mobile', phone: '+61425764905' },
    { sid: 'directory5', fullName: 'Suzana Goceva', phone: '+61287902726' },
    { sid: 'directory6', fullName: 'Sandra He', phone: '+61287902725' },
    {
      sid: 'directory7',
      fullName: 'Sandra He - Mobile',
      phone: '+61448421255',
    },
    { sid: 'directory8', fullName: 'James - Warehouse', phone: '+61448328855' },
    {
      sid: 'directory9',
      fullName: 'Nance Mason - Sales',
      phone: '+61457529918',
    },
    {
      sid: 'directory10',
      fullName: 'Warren Merritt - Mobile',
      phone: '+61419741140',
    },
  ]

  callback(null, utils.response('json', contacts))
})