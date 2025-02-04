import { NextRequest, NextResponse } from 'next/server';
import { getDevelopArticle } from './getDevelopArticle';

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const cursor = searchParams.get('cursor');

    const article = await getDevelopArticle(cursor);
    return NextResponse.json(article);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
