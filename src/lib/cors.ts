
export function setCorsHeaders(response: Response) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Or use a specific origin
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}
