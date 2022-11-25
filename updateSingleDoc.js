const {client}= require("./dbConfig");

const updateSingleDoc = async function (){
try {
    const database = client.db("Demo");
        const list = database.collection("list");
        const filter = {name:"cake"};
        const updateDoc = {
            $set: {
              isGood:true
            },
          };

          const result = await list.updateOne(filter,updateDoc);
          console.log(`Updated ${result.modifiedCount} documents`);
    
} catch (error) {
    console.log(error);
    
}   
finally {
  await client.close();
}
}
updateSingleDoc();