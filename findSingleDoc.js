const {client}= require("./dbConfig");

const findSingleDoc = async function (){
try {
    const database = client.db("Demo");
        const list = database.collection("list");
        const query= {name: "cake"};

        const result = await list.findOne(query);
        console.log(result);
        
        }
    catch (error) {
    console.log(error);
    
}   
finally {
  await client.close();
}
}
findSingleDoc();