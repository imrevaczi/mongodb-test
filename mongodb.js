const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://imre:ApTEqDn8lKLf4dMz@mycluster-g0rzp.gcp.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true });
var myobj = { name: "Company Inc", address: "Highway 37" };
client.connect(err => {
  const collection = client.db("test").collection("users");
 // perform actions on the collection object
  collection.insertOne(myobj, function(err,res) {
	 if (err) throw err;
		console.log("1 dopcument inserted") ;
  });
  client.close();
}); 