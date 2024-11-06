import { NextResponse } from "next/server";

import { feedbackSchema } from "@/app/lib/types";

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
    const q1 = result.data.q1;
    const q2 = result.data.q2;
    const q3 = result.data.q3;
    const q4 = result.data.q4;
    const q5 = result.data.q5;
    const q6 = result.data.q6;
    const q7 = result.data.q7;
    const q8 = result.data.q8;
    const q9 = result.data.q9;
    const q10 = result.data.q10;
    const feedback = result.data.feedback;
    try {
      await client.sql`
          INSERT INTO feedback (q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,value)
          VALUES (${q1}, ${q2}, ${q3}, ${q4}, ${q5}, ${q6}, ${q7}, ${q8}, ${q9}, ${q10}, ${feedback})
          ON CONFLICT (id) DO NOTHING;
        `;
      //   return response
      return NextResponse.json({ success: true });
    } catch (error) {
      //   return response
      console.log(error);
      return NextResponse.json({ errors: error });
    }
  }

  //   return response
  return NextResponse.json({ errors: zodErrors });

  if (Object.keys(zodErrors).length > 0) {
    return NextResponse.json({ errors: zodErrors });
  }
  return NextResponse.json({ success: true });
}
