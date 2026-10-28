import { getDb } from "@/lib/mongodb";
import { profile } from "@/data/profile";

type ClickDoc = { _id: string; count: number };

const linkIds = new Set(profile.links.map((link) => link.id));

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  const { linkId } = await request.json().catch(() => ({}));
  if (typeof linkId !== "string" || !linkIds.has(linkId)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db
      .collection<ClickDoc>("clicks")
      .updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "클릭 기록에 실패했습니다." }, { status: 500 });
  }
}

// 링크별 클릭 수 조회
export async function GET() {
  try {
    const db = await getDb();
    const docs = await db.collection<ClickDoc>("clicks").find().toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
    return Response.json(counts);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "클릭 수 조회에 실패했습니다." }, { status: 500 });
  }
}
