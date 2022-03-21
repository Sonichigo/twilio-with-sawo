const twilio = require('twilio');

exports.handler = async function(context, event, callback) {
  const accessToken = new twilio.jwt.AccessToken(
    context.ACCOUNT_SID, context.API_KEY_SID, context.API_KEY_SECRET
  );
  accessToken.identity = event.roomname;
  console.log(event);
  const videoGrant = new twilio.jwt.AccessToken.VideoGrant({
    room: 'roomname',
  });
  accessToken.addGrant(videoGrant);
  return callback(null, {
    token: accessToken.toJwt(),
  });
}
