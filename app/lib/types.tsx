import { z } from "zod";

export const feedbackSchema = z.object({
  feedback: z.coerce
    .number()
    .min(1, "Mohon pilih kembali tingkat kepuasan Anda")
    .max(3, "Mohon pilih kembali tingkat kepuasan Anda"),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
