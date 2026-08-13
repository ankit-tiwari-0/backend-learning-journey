const client = require("./client")

async function init() {
  const   data = await client.get("name:2")
  await client.set("msg:6", "hey from nodejs")
  const msg = await client.get("msg:6")
  console.log(data);
  console.log(msg);
  
  
}

init()