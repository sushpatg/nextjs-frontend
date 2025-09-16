import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: "Test"
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log("Susmitha")
  res.status(200).json({ message: 'Hello from Next.js!' })
}
