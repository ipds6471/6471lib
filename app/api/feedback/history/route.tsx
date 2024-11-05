import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { db } from "@vercel/postgres";
const client = await db.connect();

export async function GET() {
  try {
    const feedback = await client.sql`SELECT * FROM feedback`;
    return NextResponse.json({ success: true, data: feedback.rows });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}
