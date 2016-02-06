//Be sure to set ParseApplicationId and ParseAPIKey in the settings
//so they get added to the configuration object

function getByEmail (email, callback) {
  var profile = {
    email:  email
  };
  
  request({
    url: 'https://api.parse.com/1/users',
    qs: {where: profile},
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
        if(Array.isArray(body.results)){
          var user = body.results[0];
          callback(null, user);
        } else {
          callback();
        }
      }
    }
  });
}
