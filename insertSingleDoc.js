const {client}= require("./dbConfig");

const insertSingleDoc= async function(){
    try {
    
        const database = client.db("Demo");
        const list = database.collection("list");
        const doc= { name: "cake", healthy: false }

          const result = await list.insertOne(doc);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);

  } catch(error){

    console.log(error);

  }
  
  
  finally {
    await client.close();
  }
}
insertSingleDoc();