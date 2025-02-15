'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

type FilterContextType = {
  totlaArticleType: string[];
  changeArticleType: (type: string) => void;
  selectedType: string;
};

const totlaArticleType = ['신문 기사', '개발 블로그'];
const filterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [type, setType] = useState(totlaArticleType[0]);

  const changeArticleType = (type: string) => {
    setType(type);
  };

  return (
    <filterContext.Provider
      value={{
        totlaArticleType,
        selectedType: type,
        changeArticleType,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(filterContext);

  if (!context) {
    throw new Error('Filter context is not exist');
  }

  return context;
};
