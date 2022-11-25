const {client}= require("./dbConfig");

const updateMultipleDoc = async function (){
try {
    const database = client.db("Demo");
        const list = database.collection("list");
        const filter = {};
        const updateDoc = {
            $set: {
              isGood:true
            },
          };

          const result = await list.updateMany(filter,updateDoc);
          console.log(`Updated ${result.modifiedCount} documents`);
    
} catch (error) {
    console.log(error);
    
}   
finally {
  await client.close();
}
}
updateMultipleDoc();