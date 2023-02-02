import { Container } from '../../components/Container';
import HeaderContract from './Header';
import { DivContainerContracts } from './styles';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

const Contracts = () => {
  return (
    <>
      <DivContainerContracts>
        <Container>
          <HeaderContract />
          <main className="h-4/6">
            <h2 className="font-bold text-center mt-3 border-2 border-red-500 rounded mb-1.5">
              Contratos Vinculados
            </h2>

            <div className="flex flex-col h-5/6 justify-between">
              <table className="border-collapse border-spacing-2 w-full text-center">
                <thead>
                  <tr className="bg-zinc-400">
                    <th> </th>
                    <th className="text-white">Nome do Contrato</th>
                    <th className="text-white">Código do Contrato</th>
                    <th className="text-white">Retenção Técnica</th>
                    <th className="text-white">Detalhes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td className="">
                      <input type="checkbox" name="teste" id="teste" />
                    </td>
                    <td className="">
                      <h3>Título</h3>
                    </td>
                    <td className="">
                      <span>11002200-01</span>
                    </td>
                    <td className="">
                      <span>5%</span>
                    </td>
                    <td className="flex justify-center">
                      <MagnifyingGlassCircleIcon className="h-7 w-7 text-blue-500 cursor-zoom-in" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex w-full justify-end gap-10">
                <button className="bg-yellow-400 px-12 py-1">Anterior</button>
                <button className="bg-green-600 px-12 py-1">Próximo</button>
              </div>
            </div>
          </main>
        </Container>
      </DivContainerContracts>
    </>
  );
};

export default Contracts;
