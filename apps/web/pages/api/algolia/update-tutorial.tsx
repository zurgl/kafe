// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { AlgoliaApi } from '@builderdao/apis';

type ResponseData = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { id, ...data } = req.body;

  const algoliaApi = new AlgoliaApi({
    appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
    accessKey: process.env.ALGOLIA_SEARCH_ADMIN_KEY as string,
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string,
  });

  try {
    await algoliaApi.updateTutorial(id, data);
  } catch (err) {
    console.log('ERR', err);
  }

  res.status(200).json({
    success: true,
  });
}