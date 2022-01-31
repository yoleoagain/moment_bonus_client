export type RequestMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'
export type RequestBody = {
  method: RequestMethods,
  data?: any
}