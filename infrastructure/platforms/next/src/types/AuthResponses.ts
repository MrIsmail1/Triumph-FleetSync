export interface User {
  id: string;
  email: { value: string };
  firstName?: { value: string };
  lastName?: { value: string };
  role: { value: string };
}

export interface LoginResponse {
  token: string;
  user: User;
}
export interface UseAuthOptions
  extends Omit<
    import("@tanstack/react-query").UseQueryOptions<User, Error>,
    "queryKey" | "queryFn"
  > {
  queryKey?: unknown[];
  queryFn?: () => unknown;
}
