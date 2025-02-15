import { PropsWithChildren } from 'react';
import { QueryClientProvider } from './QueryClientProvider';
import { FilterProvider } from './FilterProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <FilterProvider>{children}</FilterProvider>
    </QueryClientProvider>
  );
};
