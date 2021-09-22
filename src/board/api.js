import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);

export async function getBoard(id) {
  try {
    await client.connect();

    const database = client.db("sch-cpm-math");
    const boards = database.collection("boards");

    return await boards.findOne({ _id: ObjectId(id) });
  } finally {
    await client.close();
  }
}

export async function addBoard({ boardName, studentsList }) {
  try {
    await client.connect();

    const database = client.db("sch-cpm-math");
    const boards = database.collection("boards");

    const res = await boards.insertOne({ boardName, studentsList });
    return { id: res.insertedId.toHexString() };
  } finally {
    await client.close();
  }
}
