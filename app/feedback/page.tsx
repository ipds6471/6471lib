"use client";

import { useState, useEffect, useMemo } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// custom
import { FeedbackSchema, feedbackSchema } from "@/app/lib/types";

// UI
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Spinner,
  Progress,
} from "@nextui-org/react";

// icon
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Page() {
  // list of face card
  const face = [
    {
      title: "Tidak Puas",
      value: 1,
      img: "/feedback/sadface.png",
    },
    {
      title: "Biasa Aja",
      value: 2,
      img: "/feedback/pokerface.png",
    },
    {
      title: "Puas",
      value: 3,
      img: "/feedback/smileface.png",
    },
  ];

  // react hook form declaration
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
    setError,
    setValue,
  } = useForm<FeedbackSchema>({
    resolver: zodResolver(feedbackSchema),
    mode: "onChange",
    defaultValues: {
      feedback: 0,
    },
  });

  // state for timer after submitted
  const [pobar, setPobar] = useState(0);

  // form submit function
  async function onSubmit(data: FeedbackSchema) {
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      alert("failed");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.feedback) {
        setError("feedback", {
          type: "server",
          message: errors.feedback,
        });
      }
    }

    if (responseData.success) {
      console.log("berhasil submit");
      setTimeout(() => {
        setPobar((v) => (v >= 100 ? 0 : v + 10));
        reset();
      }, 3000);
    }
  }

  if (isSubmitting) {
    return (
      <div className="flex justify-center">
        <Spinner
          label="Mengirim Data"
          color="default"
          labelColor="foreground"
        />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center">
        <b className="text-3xl">Terima kasih atas penilaiannya!</b>
        <Progress
          aria-label="Downloading..."
          size="sm"
          value={pobar}
          color="success"
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <b className="text-3xl">Bagaimana dengan pelayanan yang diterima?</b>
      <div className="flex gap-4">
        {face.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => {
              setValue("feedback", item.value);
              handleSubmit(onSubmit)();
            }}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-3xl justify-center">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      {errors.feedback && (
        <div className="flex gap-2 items-center">
          <ExclamationTriangleIcon className="size-5 text-red-500" />
          <p className="text-red-500 font-semibold">{`${errors.feedback.message}`}</p>
          <ExclamationTriangleIcon className="size-5 text-red-500" />
        </div>
      )}
      <form id="feedbackForm" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("feedback")} type="number" required />
      </form>
    </div>
  );
}
