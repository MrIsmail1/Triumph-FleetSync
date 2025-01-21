"use client";
import { getUser } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AUTH = "auth";

const useAuth = (options: { requiredRoles?: string[] } = {}) => {
  /*   const { requiredRoles } = options;
  const router = useRouter(); */
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60 * 24,
    ...options,
  });

  return { user, ...rest };
};

export default useAuth;
