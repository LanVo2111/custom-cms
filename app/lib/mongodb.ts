import { Db, MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.MONGODB_DB_NAME

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}
if (!DB_NAME) {
  throw new Error('please add db name to env files');
}

const options = {};
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Để tránh lỗi trong hot reload ở dev mode
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI, options);
  clientPromise = client.connect();
}

export default clientPromise;

export const getDb = async (): Promise<Db> => {
  try {
    const mongoDBClient = await clientPromise;
    const db = mongoDBClient.db(DB_NAME);
    return db;
  } catch (error) {
    throw(error)
  }
}
