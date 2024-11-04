import FeedbackTable from "@/app/ui/feedback/table";

export default async function Page() {
  const req = await fetch(process.env.PUBLIC_URL + "/api/feedback/history");
  const result = await req.json();

  let feedbackData = [];

  if (result.success) {
    feedbackData = result.data;
    console.log(feedbackData);
  }

  console.log(FeedbackTable);

  let da = [
    {
      id: "98245f02-e6ad-4a64-8cc0-12383024c9c0",
      value: 3,
      created_at: "2024-11-03T20:55:30.236Z",
      updated_at: null,
    },
    {
      id: "874dea79-e73c-4e58-990e-64ca3e67650b",
      value: 3,
      created_at: "2024-11-03T20:58:54.449Z",
      updated_at: null,
    },
    {
      id: "1efa1e32-c64b-410d-af77-8ee91db40f3c",
      value: 1,
      created_at: "2024-11-03T20:59:35.529Z",
      updated_at: null,
    },
    {
      id: "a1e4a875-9b72-4142-a3d2-2509e914c8e9",
      value: 2,
      created_at: "2024-11-03T21:01:47.651Z",
      updated_at: null,
    },
    {
      id: "fbb1b797-26e1-420f-9089-f595d52c5c44",
      value: 3,
      created_at: "2024-11-03T21:03:19.533Z",
      updated_at: null,
    },
    {
      id: "5e42bcf7-b183-43e8-ab66-42dfb27ccb98",
      value: 1,
      created_at: "2024-11-03T21:04:26.711Z",
      updated_at: null,
    },
  ];

  return (
    <div>
      <FeedbackTable rows={da} />
    </div>
  );
}
