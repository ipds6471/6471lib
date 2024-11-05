import FeedbackTable from "@/app/ui/feedback/table";

export default async function Page() {
  const req = await fetch(process.env.PUBLIC_URL + "/api/feedback/history");
  const result = await req.json();

  let feedbackData = [];

  if (result.success) {
    feedbackData = result.data;
    return (
      <div>
        <FeedbackTable rows={feedbackData} />
      </div>
    );
  }

  return (
    <div>
      <p className="text-danger">Gagal mengambil data</p>
    </div>
  );
}
