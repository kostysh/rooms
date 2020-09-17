import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(
    `
      <p>
        OpenAPI docs available at
        <a href="https://staging.rooms.windingtree.com/api/doc">
          https://staging.rooms.windingtree.com/api/doc
        </a>
      </p>
    `
  )
}