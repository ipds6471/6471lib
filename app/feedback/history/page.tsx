import FeedbackTable from "@/app/ui/feedback/table";

export default async function Page() {
  let feedbackData = [];
  try {
    const req = await fetch(process.env.PUBLIC_URL + "/api/feedback/history");
    const result = await req.json();
    if (result.success) {
      feedbackData = result.data;
      return (
        <div>
          <FeedbackTable rows={feedbackData} />
        </div>
      );
    }
  } catch (error) {
    return (
      <div>
        <p className="text-danger">Gagal mengambil data</p>
      </div>
    );
  }
}
