"use client";

import { useState, useMemo } from "react";

// third
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// custom
import { YearSchema, yearSchema } from "@/app/lib/types";
import FeedbackTable from "./table";

// UI
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Spinner,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

// icon
import { CalendarIcon } from "@heroicons/react/20/solid";

export default function TableForm({
  yearList,
}: {
  yearList: {
    key: string;
    label: string;
  }[];
}) {
  // state to hold selected dropdown
  const [selectedYear, setSelectedYear] = useState<Selection>(
    new Set(["Pilih Tahun"])
  );
  const selectedYearValue = useMemo(() => {
    if (Array.from(selectedYear).length == 0) {
      return "Pilih Tahun";
    }
    return Array.from(selectedYear).join(", ").replaceAll("_", " ");
  }, [selectedYear]);

  // state to collect feedback data
  const [feedbackData, setFeedbackData] = useState([]);

  // react hook form declaration
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
    setError,
    setValue,
  } = useForm<YearSchema>({
    resolver: zodResolver(yearSchema),
    mode: "onChange",
    defaultValues: {
      year: new Date().getFullYear(),
    },
  });

  // form submit function
  async function onSubmit(data: YearSchema) {
    const response = await fetch("/api/feedback/history", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      alert("fetch failed");
      return;
    }

    // if there are errors from api
    if (responseData.errors) {
      const errors = responseData.errors;
      console.log(errors);
      if (errors.year) {
        setError("year", {
          type: "server",
          message: errors.year,
        });
      }
    }

    // if there are success from api
    if (responseData.success) {
      console.log(responseData.data);
      setFeedbackData(responseData.data);
      reset();
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
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-3">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Button
              variant="bordered"
              startContent={<CalendarIcon className="size-5" />}
            >
              {selectedYearValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dynamic Dropdown"
            items={yearList}
            variant="flat"
            selectionMode="single"
            selectedKeys={selectedYear}
            onSelectionChange={setSelectedYear}
            onAction={(key) => {
              setValue("year", parseInt(key.toString()));
              handleSubmit(onSubmit)();
            }}
          >
            {(item) => (
              <DropdownItem key={item.key} color={"default"} className={""}>
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
        <form className="hidden">
          <input {...register("year")} type="number" required />
        </form>
      </div>
      {/* {feedbackData.length > 0 &&  />} */}
      <FeedbackTable rows={feedbackData} loadingState={isSubmitting} />
    </div>
  );
}
