import { useRouter } from 'next/navigation';

export const useChangeUrl = (url: string) => {
  const router = useRouter();

  const handleChangeUrl = () => {
    router.push(url);
  };

  return { handleChangeUrl };
};
