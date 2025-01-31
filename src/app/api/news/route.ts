import { NextResponse } from 'next/server';
import { getNewsArticle } from './getNewsArticle';

/**
 * 무한스크롤 관련 설계
 *  - 클라이언트에서 신문 기사 요청
 *  1) 신문 기사 있는지 체크
 *   - 없을 경우 빈 배열 반환 (일요일)
 *  2) 신문 기사 있을 경우
 *   - 클라이언트에서 날짜를 쿼리 스트링으로 설정해서 1페이지 요청
 *   - 서버에서 1페이지와 2페이지를 모두 받아온 뒤, 2페이지가 존재할 경우
 *     1페이지와 함께 다음 페이지 존재함을 알리는 nextPage 프로퍼티 전달 (받아온 2페이지 데이터는 redis에 caching)
 *   - 이런 식으로 계속 진행하다가, 다음 페이지가 더이상 존재하지 않을 경우 요청한 페이지만 전달하고 nextPage 프로퍼티 전달 X
 *
 */

export const GET = async () => {
  try {
    await getNewsArticle();
    return NextResponse.json({ message: 'http ok', status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
