import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { db } from "@vercel/postgres";
import { error } from "console";
const client = await db.connect();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log(req);
//   if (req.method === "GET") {
//     try {
//       const feedback = await client.sql`SELECT * FROM feedback`;
//       return res.status(200).json({ feedback: feedback.rows });
//     } catch (err) {
//       return res.status(500).json({ error: "failed to load data" });
//     }
//   }
// }

export async function GET() {
  try {
    const feedback = await client.sql`SELECT * FROM feedback`;
    return NextResponse.json({ success: true, data: feedback.rows });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
