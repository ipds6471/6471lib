import { feedbackSchema } from "@/app/lib/types";
import { NextResponse } from "next/server";

import { db } from "@vercel/postgres";
const client = await db.connect();

export async function POST(request: Request) {
  const body: unknown = await request.json();

  //   validate data
  const result = feedbackSchema.safeParse(body);
  //   compile error
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  //   add to db
  if (result.success) {
    const feedback = result.data.feedback;
    await client.sql`
        INSERT INTO feedback (value)
        VALUES (${feedback})
        ON CONFLICT (id) DO NOTHING;
      `;
  }

  //   return response
  return NextResponse.json(
    // check if there is error
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
