'use client';

import { useRouter } from 'next/navigation';
import { useFilterContext } from '@/provider/FilterProvider';

export const FilterModal = () => {
  const { totlaArticleType, changeArticleType, selectedType } =
    useFilterContext();
  const router = useRouter();

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeArticleType(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
      <h6>유형</h6>
      <div className="cursor-pointer" onClick={() => router.back()}>
        X
      </div>
      <select onChange={handleChangeOption} defaultValue={selectedType}>
        {totlaArticleType.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
