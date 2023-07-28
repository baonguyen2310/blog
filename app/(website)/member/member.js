"use client";

import Container from "@/components/container";
import { useRouter, useSearchParams } from "next/navigation";
import { paginatedquery } from "@/lib/sanity/groq";
import AuthorList from "@/components/authorlist";
import useSWR, { SWRConfig } from "swr";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/sanity/client";

export default function Authors({ authors }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <>
      <Container>
        {authors && authors?.length === 0 && (
          <div className="flex h-40 items-center justify-center">
            <span className="text-lg text-gray-500">
              End of the result!
            </span>
          </div>
        )}

        {authors && (
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {authors.map(author => (
              <AuthorList key={author._id} author={author} aspect="square" />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}