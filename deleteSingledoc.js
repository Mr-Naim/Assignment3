const {client}= require("./dbConfig");

const deleteSingleDoc = async function (){
try {
    const database = client.db("Demo");
        const list = database.collection("list");

        const query = {name: "donut"};
        const  result = await list.deleteOne(query);
        console.log("Deleted " + result.deletedCount + " documents");

    
} catch (error) {
    console.log(error);
    
}   
finally {
  await client.close();
}
}
deleteSingleDoc();