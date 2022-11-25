const {client}= require("./dbConfig");

const deleteMultipleDoc = async function (){
try {
    const database = client.db("Demo");
        const list = database.collection("list");

        const query = {};
        const  result = await list.deleteMany(query);
        console.log("Deleted" + result.deletedCount + "documents");

    
} catch (error) {
    console.log(error);
    
}   
finally {
  await client.close();
}
}
deleteMultipleDoc();