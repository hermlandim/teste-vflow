import Logo from '../../../../docs/assets/logo.png';

const HeaderContract = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-7">
        <figure className="w-44">
          <img src={Logo} alt="Logo VFlows" />
        </figure>
        <h1 className="text-3xl font-bold">PAGAMENTO DE FORNECEDOR</h1>
      </div>

      <div className="flex flex-wrap justify-between border-solid border-2 border-red-500 rounded p-1">
        <div className="flex w-full justify-between">
          <h2 className="font-bold">Razão Social:</h2>
          <span>Razão Social do Fornecedor Logado</span>

          <h2 className="font-bold">CNPJ:</h2>
          <span>00.000.000/000-00</span>
        </div>

        <div className="flex flex-wrap gap-9 justify-between">
          <h2 className="font-bold">Nome Fantasia:</h2>
          <span>Nome Fantasia do Fornecedor Logado</span>
        </div>
      </div>
    </>
  );
};

export default HeaderContract;
