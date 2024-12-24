class AppError extends Error {
  constructor(
    public statusCode: number,
    public errorCode: string,
    public message: string
  ) {
    super(message);
  }
}
export default AppError;
