'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const buttonText = '스크랩';

export const ScrapPageButton = () => {
  const pathName = usePathname();
  const isPathActive = pathName === '/scrap';

  return (
    <Link href="/scrap" className="button-container">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="2"
          width="18"
          height="20"
          rx="2"
          stroke={`${isPathActive ? 'white' : 'gray'}`}
          strokeWidth="2"
        />
        <path
          d="M8 7H16M8 11.5H16M8 16H13.2"
          stroke={`${isPathActive ? 'white' : 'gray'}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className={`button-text ${isPathActive ? 'text-white' : 'text-gray-400'}`}
      >
        {buttonText}
      </div>
    </Link>
  );
};
