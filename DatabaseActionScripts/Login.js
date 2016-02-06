//Be sure to set ParseApplicationId and ParseAPIKey in the settings
//so they get added to the configuration object

function login (username, password, callback){
  request({
    url: 'https://api.parse.com/1/login',
    qs: {username: username, password: password},
    method: 'GET',
    headers: {
        'X-Parse-Application-Id': configuration.ParseApplicationId,
        'X-Parse-REST-API-Key': configuration.ParseAPIKey,
        'X-Parse-Revocable-Session' : '1'
    }
  }, function(error, response, body){
    if(error) {
      callback(error);
    } else {
      body = JSON.parse(body);
      if(response.statusCode !== 200){
        callback();
      } else {
        callback(null, {
          user_id : body.objectId,
          username: body.username,
          email: body.email,
          email_verified: true,
          nickname: body.nickname
        });
      }
    }
  });
}