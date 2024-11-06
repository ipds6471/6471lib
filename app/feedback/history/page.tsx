// database
import { db } from "@vercel/postgres";
const client = await db.connect();

// custom
import TableForm from "@/app/ui/feedback/table-form";

export default async function Page() {
  // array to collect year list
  let yearList = [{ key: "none", label: "None" }];
  try {
    // get all date from feedback
    const dateList = await client.sql`SELECT created_at FROM feedback`;
    // console.log(dateList.rows);
    // get every year from db
    let year = dateList.rows.map((d) => {
      return new Date(d.created_at).getFullYear();
    });
    // get unique value
    year = [...new Set(year)];
    // transform to array of object
    yearList = year.map((y) => {
      return { key: y.toString(), label: y.toString() };
    });
    // console.log(yearList);
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <TableForm yearList={yearList} />
    </div>
  );
}
