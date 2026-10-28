import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 중 핫 리로드로 연결이 계속 늘어나지 않도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI가 .env.local에 설정되지 않았습니다.");
  }
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  const client = await globalForMongo._mongoClientPromise;
  return client.db(dbName);
}
