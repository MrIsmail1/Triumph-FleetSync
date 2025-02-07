import { ContentfulStatusCode } from "hono/utils/http-status";

class AppError extends Error {
  constructor(
    public statusCode: ContentfulStatusCode,
    public errorCode: string,
    public override message: string
  ) {
    super(message);
  }
}
export default AppError;
