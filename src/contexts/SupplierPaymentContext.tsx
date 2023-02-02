import { createContext, ReactNode } from 'react';

interface IContext {}

interface IProviderProps {
  children: ReactNode;
}

export const SupplierPaymentContext = createContext<IContext>({} as IContext);

const SupplierPaymentProvider = ({ children }: IProviderProps) => {
  return (
    <SupplierPaymentContext.Provider value={''}>
      {children}
    </SupplierPaymentContext.Provider>
  );
};

export default SupplierPaymentProvider;
