"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {};

  return <div className="w-full flex-center gap-5 mt-10"></div>;
};

export default ShowMore;
