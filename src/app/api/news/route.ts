import { NextRequest, NextResponse } from 'next/server';
import { getNewsArticle } from './getNewsArticle';
import { generateCurrnetDate, generateResponseData } from './utils.news';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');

  try {
    const { articles, totalPageNum } = await getNewsArticle(
      generateCurrnetDate(),
      page
    );

    return NextResponse.json({
      ...generateResponseData(articles, page, totalPageNum),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
