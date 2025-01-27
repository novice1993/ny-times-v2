import { PropsWithChildren } from 'react';

export const MenuContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[375px] h-[85px] flex items-center justify-between">
      {children}
      테스트임
    </div>
  );
};
