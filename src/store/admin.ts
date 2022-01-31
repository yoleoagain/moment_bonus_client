import { webSocket } from 'rxjs/webSocket'
import { RequestBody } from './types'

export const ratesSbujectWS = webSocket<RequestBody>(`${process.env.API_HOST}/rates`)
export const closeConnection = () => { ratesSbujectWS.complete() }
