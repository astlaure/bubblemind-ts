class HttpError extends Error {
  httpCode: number;

  constructor(httpCode: number, message?: string) {
    super(message);
    this.httpCode = httpCode;
  }
}

export default HttpError;
