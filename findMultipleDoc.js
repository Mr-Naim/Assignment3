const {client}= require("./dbConfig");

const findMultipleDoc = async function (){
try {
    const database = client.db("Demo");
        const list = database.collection("list");
        const query= {};

        const cursor = list.find(query);
        if ((await cursor.estimatedDocumentCount)===0){
            console.log("No doc found");
        }else{
            const users= await cursor.toArray();
            await users.forEach(user=>console.log(user));
        }
        }
    catch (error) {
    console.log(error);
    
}   
finally {
  await client.close();
}
}
findMultipleDoc();