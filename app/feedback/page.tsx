"use client";

import { useState, useEffect, useMemo } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// custom
import { FeedbackSchema, feedbackSchema } from "@/app/lib/types";
import { overalFace, feedbackQuestion } from "@/app/lib/feedback-list";
import { FCardBody, FCardFooter } from "@/app/ui/feedback/feedback-card-body";

// UI
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Spinner,
  Progress,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";

// icon
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Page() {
  // react hook form declaration
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
    setValue,
    watch,
  } = useForm<FeedbackSchema>({
    resolver: zodResolver(feedbackSchema),
    mode: "onChange",
    defaultValues: {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      q8: 0,
      q9: 0,
      q10: 0,
      feedback: 0,
    },
  });

  //   variable to hold newest input value
  const fValue = watch();

  //   variable for modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (
      errors.q1 ||
      errors.q2 ||
      errors.q3 ||
      errors.q4 ||
      errors.q5 ||
      errors.q6 ||
      errors.q7 ||
      errors.q8 ||
      errors.q9 ||
      errors.q10 ||
      errors.feedback
    ) {
      setValue("feedback", 0);
    }
  }, [errors]);

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

    // if there is an error from backend add it to error formstate
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.q1) {
        setError("q1", {
          type: "server",
          message: errors.q1,
        });
      }
      if (errors.q2) {
        setError("q2", {
          type: "server",
          message: errors.q2,
        });
      }
      if (errors.q3) {
        setError("q3", {
          type: "server",
          message: errors.q3,
        });
      }
      if (errors.q4) {
        setError("q4", {
          type: "server",
          message: errors.q4,
        });
      }
      if (errors.q5) {
        setError("q5", {
          type: "server",
          message: errors.q5,
        });
      }
      if (errors.q6) {
        setError("q6", {
          type: "server",
          message: errors.q6,
        });
      }
      if (errors.q7) {
        setError("q7", {
          type: "server",
          message: errors.q7,
        });
      }
      if (errors.q8) {
        setError("q8", {
          type: "server",
          message: errors.q8,
        });
      }
      if (errors.q9) {
        setError("q9", {
          type: "server",
          message: errors.q9,
        });
      }
      if (errors.q10) {
        setError("q10", {
          type: "server",
          message: errors.q10,
        });
      }
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

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center">
        <b className="text-3xl">Terima kasih atas penilaiannya!</b>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <b className="text-3xl">Bagaimana dengan pelayanan yang diterima?</b>
      <div className="grid grid-cols-4 gap-4 px-4">
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(1)}</p>
          {errors.q1 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q1.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(1).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q1 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q1", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(2)}</p>
          {errors.q2 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q2.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(2).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q2 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q2", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(3)}</p>
          {errors.q3 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q3.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(3).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q3 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q3", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(4)}</p>
          {errors.q4 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q4.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(4).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q4 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q4", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(5)}</p>
          {errors.q5 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q5.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(5).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q5 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q5", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(6)}</p>
          {errors.q6 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q6.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(6).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q6 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q6", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(7)}</p>
          {errors.q7 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q7.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(7).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q7 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q7", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(8)}</p>
          {errors.q8 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q8.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(8).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q8 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q8", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(9)}</p>
          {errors.q9 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q9.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(9).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q9 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q9", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(10)}</p>
          {errors.q10 && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.q10.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(10).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.q10 == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("q10", item.value);
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
        <div className="col-span-4">
          <Divider className="" />
        </div>
        <div className="flex flex-col items-right text-right text-lg justify-center">
          <p>{feedbackQuestion(0)}</p>
          {errors.feedback && (
            <p className="text-red-500 font-semibold text-sm">{`${errors.feedback.message}`}</p>
          )}
        </div>
        <div className="col-span-3 flex gap-2">
          {overalFace(0).map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className={
                fValue.feedback == index + 1 ? "border-3 border-success" : ""
              }
              onPress={() => {
                setValue("feedback", item.value);
                onOpen();
                // handleSubmit(onSubmit)();
              }}
            >
              <FCardBody item={item} />
              <FCardFooter item={item} />
            </Card>
          ))}
        </div>
      </div>
      {(errors.q1 ||
        errors.q2 ||
        errors.q3 ||
        errors.q4 ||
        errors.q5 ||
        errors.q6 ||
        errors.q7 ||
        errors.q8 ||
        errors.q9 ||
        errors.q10 ||
        errors.feedback) && (
        <div className="flex gap-2 items-center">
          <ExclamationTriangleIcon className="size-7 text-red-500 pt-1" />
          <p className="text-red-500 font-semibold text-2xl">
            Mohon periksa kembali isian Anda
          </p>
          <ExclamationTriangleIcon className="size-7 text-red-500 pt-1" />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="hidden">
        <input {...register("q1")} type="number" required />
        <input {...register("q2")} type="number" required />
        <input {...register("q3")} type="number" required />
        <input {...register("q4")} type="number" required />
        <input {...register("q5")} type="number" required />
        <input {...register("q6")} type="number" required />
        <input {...register("q7")} type="number" required />
        <input {...register("q8")} type="number" required />
        <input {...register("q9")} type="number" required />
        <input {...register("q10")} type="number" required />
        <input {...register("feedback")} type="number" required />
      </form>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Yakin dengan pilihan Anda?
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tidak
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    handleSubmit(onSubmit)();
                    onClose();
                  }}
                >
                  Ya
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
