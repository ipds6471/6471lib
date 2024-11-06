import { NextResponse } from "next/server";

import { yearSchema } from "@/app/lib/types";

import { db } from "@vercel/postgres";
const client = await db.connect();

export async function POST(request: Request) {
  const body: unknown = await request.json();

  //   validate data
  const result = yearSchema.safeParse(body);
  //   compile error
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  console.log(result);

  //   db query
  if (result.success) {
    const year = result.data.year;
    try {
      const feedback =
        await client.sql`SELECT *, created_at AT TIME ZONE 'UTC' as created_at 
        FROM feedback 
        WHERE date_part('year', created_at) = ${year}`;
      //   return response
      return NextResponse.json({ success: true, data: feedback.rows });
    } catch (error) {
      //   return response
      console.log(error);
      return NextResponse.json({ errors: error });
    }
  }

  //   return response
  return NextResponse.json({ errors: zodErrors });
}
