import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useInfiniteScroll(callback: () => void, hasNextPage: boolean) {
  const { ref, inView } = useInView({
    threshold: 0.5, // ✅ 50% 이상 보이면 감지
    triggerOnce: false, // ✅ 여러 번 실행 가능하도록 설정
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      callback(); // ✅ 데이터 요청 (fetchNextPage 호출)
    }
  }, [inView, hasNextPage, callback]);

  return ref;
}
