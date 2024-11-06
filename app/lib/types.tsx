import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  q1: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q2: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q3: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q4: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q5: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q6: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q7: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q8: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q9: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  q10: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
  feedback: z.coerce
    .number()
    .min(1, "Mohon pilih tingkat kepuasan Anda")
    .max(4, "Mohon pilih kembali tingkat kepuasan Anda"),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;

export const yearSchema = z.object({
  year: z.coerce
    .number()
    .max(new Date().getFullYear(), "Mohon pilih kembali tahun yang sesuai"),
});

export type YearSchema = z.infer<typeof yearSchema>;
