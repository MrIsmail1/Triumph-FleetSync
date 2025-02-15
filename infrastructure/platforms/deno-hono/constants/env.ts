const getEnv = (key: string, defaultValue?: string): string => {
  const value = Deno.env.get(key) || defaultValue;
  if (value === undefined) {
    throw new Error(`Missing environment variable ${key}`);
  }
  return value;
};
export const PORT = getEnv("PORT", "4004");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const MONGO_URI = getEnv("MONGO_URI");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
