import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useInfiniteScroll(callback: () => void, hasNextPage: boolean) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      callback();
    }
  }, [inView, hasNextPage, callback]);

  return ref;
}
