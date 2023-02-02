import Global from './styles/Global/index';
import SupplierPaymentProvider from './contexts/SupplierPaymentContext';
import RoutesMain from './routes';

function App() {
  return (
    <>
      <Global />
      <SupplierPaymentProvider>
        <RoutesMain />
      </SupplierPaymentProvider>
    </>
  );
}

export default App;
