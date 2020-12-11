import { NowRequest, NowResponse } from '@vercel/node'

import { authenticateOrgIdRequest } from '../../_lib/app/auth/orgid'
import { createOrder } from '../../_lib/app/orgid'
import { genericApiMethodHandler } from '../../_lib/tools'
import { postCreateOrderPayloadValidator } from '../../_lib/validators'
import { IOrgDetails, IPostCreateOrderPayload, ICreateOrderResult } from '../../_lib/types'

async function POST(request: NowRequest): Promise<ICreateOrderResult> {
  const requester: IOrgDetails = await authenticateOrgIdRequest(request)

  const payload: IPostCreateOrderPayload = await postCreateOrderPayloadValidator(request)

  return await createOrder(requester, payload)
}

export default async (request: NowRequest, response: NowResponse): Promise<void> => {
  await genericApiMethodHandler(request, response, { POST })
}
