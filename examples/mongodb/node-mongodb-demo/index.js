const { MongoClient, ObjectId } = require("mongodb");
// Connection URI
const uri = "mongodb://127.0.0.1:27017";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // 链接数据库
    await client.connect();
    // 获取数据库
    const myDb = client.db('myNewDatabase')
    // 获取集合
    const inventoryCollection = myDb.collection('inventory')
   
    // 创建文档
    const ret = await inventoryCollection.insertOne({
      a: 1,
      b: 2,
      c: true,
      d: [1, 2, 3]
    })
    console.log(ret)

    // 查找文档
    const findRet = await inventoryCollection.find({
      item: 'mat'
    })
    // 转为数组
    console.log(await findRet.toArray())

    // 删除文档
    const deleteRet = await inventoryCollection.deleteOne({_id: ObjectId("63a3ccc2a91f79c4db32f69b")})
    console.log(await deleteRet)
    
    // 更新文档
    const updateRet = await inventoryCollection.updateOne({
      _id : ObjectId("63a3ccc2a91f79c4db32f699"),
    }, {
      $set: {
        qty: 100
      }
    })
    console.log(updateRet, 43)
    
    // 替换文档
    const replaceRet = await inventoryCollection.replaceOne({
      _id: ObjectId("63a90abde3e3d632bef4e3a6")
    }, {
      z: 42
    })
    console.log(replaceRet)

    console.log("Connected successfully to server");

  } catch(error) {
    console.log('Connect failed')
    console.log(error)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run()
