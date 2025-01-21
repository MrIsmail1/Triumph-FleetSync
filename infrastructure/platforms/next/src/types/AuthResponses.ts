export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
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
