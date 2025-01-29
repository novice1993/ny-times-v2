import { NextResponse } from 'next/server';
import { getDevelopArticle } from './getDevelopArticle';

export const GET = async () => {
  try {
    const article = await getDevelopArticle();
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
