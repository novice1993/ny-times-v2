import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export const useChangeUrl = (url: string) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleChangeUrl = () => {
    router.push(url);
  };

  const isPathActive = pathName === url;

  return { handleChangeUrl, isPathActive };
};
