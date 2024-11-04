import { db } from "@vercel/postgres";

import { feedback } from "@/app/lib/placeholder-data";

const client = await db.connect();

async function seedFeedback() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS feedback (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        value INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL
        );
    `;

  const insertedFeedback = await Promise.all(
    feedback.map(async (item) => {
      return client.sql`
        INSERT INTO feedback (value, created_at)
        VALUES (${item.value}, ${item.created_at})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedFeedback;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedFeedback();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
