const redis = require("ioredis")

let client = redis.createClient(process.env.REDIS_URL||6379);
client.on("error", err => {
  console.log("Error in redis client " + err);
});

const saveData = async (email, data) => {
    try {
      console.log ("hello redis", email)
      user_id = '<USER>' + email
      await client.set(user_id,JSON.stringify(data))
      console.log ("email data set to ",client.get(email)) 
      return "Success"
      } catch (err) {
        console.log ("error...",err)
    }
}

const getAll = async() => {
    keys = await getKeys()
    console.log(keys)
    keys = keys[1]
    let promises = keys.map(key=>client.get(key))
    console.log('runnin promises')
      
    results = await Promise.all(promises);
    return results

}

const getKeys = async() => {
    let ks = [] 
    let cursor = 0
    return client.scan(cursor, 'MATCH', '<USER>*', 'COUNT', '5', function(err, reply){
    if(err){
        throw err
    }
    cursor = reply[0]
    if(cursor === '-1'){
        return ""
    }else{
        return reply[1]
    }
  });

    
    // const values = await client.mget(keys);
    // const values = Promise.all(keys.map(key => client.getAsync(key))).then(values => values);

    // return keys, values

}

getKeys()

module.exports = {saveData, getAll}