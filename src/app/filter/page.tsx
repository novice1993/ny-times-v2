'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(function moveToMainPage() {
    router.push('/');
  }, []);

  return <div className="w-[100%] h-[100%]" />;
};

export default Page;
