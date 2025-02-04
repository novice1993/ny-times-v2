import { NextRequest, NextResponse } from 'next/server';
import { getNewsArticle } from './getNewsArticle';
import {
  plusQueryStringPageNum,
  isLastPage,
  generateCurrnetDate,
} from './utils.news';
import { redisService } from '@/lib/redisService';

const baseUrl =
  'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&oid=009&listType=paper';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');
  const requestUrl = `${baseUrl}&date=${generateCurrnetDate()}`;

  try {
    const { articles: curPageArticles } = await getNewsArticle(
      requestUrl,
      page
    );

    // 요청한 페이지의 다음 페이지 데이터를 요청함
    const nextPageNumber = plusQueryStringPageNum(page);
    const { nextPageRedisKey, articles: nextPageArticles } =
      await getNewsArticle(requestUrl, nextPageNumber);

    // 현재 요청한 페이지가 마지막 페이지인 경우 -> redis에 저장한 다음 페이지 데이터 제거
    if (await isLastPage({ firstPageRedisKey: requestUrl, nextPageArticles })) {
      const result = await redisService.delete(nextPageRedisKey);
      console.log(
        `[Redis] delete unnecessary data, result: ${result === 1 ? 'success' : 'fail'}`
      );

      return NextResponse.json({ articles: curPageArticles });
    }

    // 현재 요청한 페이지가 마지막 페이지가 아닐 경우, next page num을 함께 반환
    return NextResponse.json({
      articles: curPageArticles,
      nextPage: nextPageNumber,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
