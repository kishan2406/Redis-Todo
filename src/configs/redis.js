const {createClient} = require("redis");

const client = createClient({ url: "redis://localhost:6379"});
// same like mongodb that is-->  mongodb://localhost:24017

client.on("error", function (err) {

    console.error({message: err.message})
});

module.exporrts = client;