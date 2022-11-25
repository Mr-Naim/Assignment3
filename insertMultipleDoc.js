const {client}= require("./dbConfig");

const insertMultipleDoc= async function(){
    try {
    
        const database = client.db("Demo");
        const list = database.collection("list");
        const docs = [
            { name: "cake", healthy: false },
            { name: "lettuce", healthy: true },
            { name: "donut", healthy: false }
          ];

          const result = await list.insertMany(docs);
    console.log(`${result.insertedCount} documents were inserted`);

  } catch(error){

    console.log(error);

  }
  
  
  finally {
    await client.close();
  }
}
insertMultipleDoc();