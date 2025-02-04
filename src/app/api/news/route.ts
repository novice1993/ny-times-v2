import { NextRequest, NextResponse } from 'next/server';
import { getNewsArticle } from './getNewsArticle';
import { plusQueryStringPageNum, isLastPage } from './utils.news';
import { redisService } from '@/lib/redisService';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');

  try {
    const { articles: curPageArticles } = await getNewsArticle(page);

    const nextPage = plusQueryStringPageNum(page);
    const { redisKey, articles: nextPageArticles } =
      await getNewsArticle(nextPage);

    // 현재 요청한 페이지가 마지막 페이지인 경우 -> redis에 저장한 다음 페이지 데이터 제거
    if (isLastPage(curPageArticles, nextPageArticles)) {
      const result = await redisService.delete(redisKey);
      console.log(
        `[Redis] delete unnecessary data, result: ${result === 1 ? 'success' : 'fail'}`
      );

      return NextResponse.json({ articles: curPageArticles });
    }

    // 현재 요청한 페이지가 마지막 페이지가 아닐 경우, next page num을 함께 반환
    return NextResponse.json({ articles: curPageArticles, nextPage });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
