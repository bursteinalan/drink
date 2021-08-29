const redis = require("ioredis")

let client = redis.createClient(process.env.REDIS_URL||6379);
client.on("error", err => {
  console.log("Error in redis client " + err);
});

const saveData = async (email, data) => {
    try {
      console.log ("hello redis", email)
      await client.set(email,data)
      console.log ("email data set to ",client.get(email)) 
      return "Success"
      } catch (err) {
        console.log ("error...",err)
    }
}

const getAll = async() => {
    let ks = [] 
    const keys = await client.keys('*', (err, keys) => {
        if (err) return console.log(err);
        if (keys) return keys

        // for(var i = 0, len = keys.length; i < len; i++) {
        //     console.log(keys[i]);
        //  }
    });
    // const values = await client.mget(keys);
    // const values = Promise.all(keys.map(key => client.getAsync(key))).then(values => values);

    // return keys, values

}

module.exports = {saveData, getAll}