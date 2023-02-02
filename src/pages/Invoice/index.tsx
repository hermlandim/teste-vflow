import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container';
import Input from '../../components/Input';
import HeaderContract from '../Contracts/Header';
import { DivContainerContracts } from '../Contracts/styles';

const Invoice = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = async (data: any, { reset }: any) => {
    console.log(data);
  };
  return (
    <>
      <DivContainerContracts>
        <Container>
          <HeaderContract />
          <main>
            <h2 className="font-bold text-center mt-3 border-2 border-red-500 rounded mb-1.5">
              Dados da Nota Fiscal
            </h2>

            <div className="border-2 border-red-500 rounded mb-1.5 p-1">
              <div className="flex justify-between w-9/12">
                <div className="flex">
                  <h3>Código do Contrato:</h3>
                  <span>11002200-01</span>
                </div>

                <h3>Título do Segundo Contrato</h3>
              </div>

              <Form ref={formRef} onSubmit={handleFormSubmit}>
                <div className="flex">
                  <label className="flex flex-col">
                    Número da Conta:
                    <Input name="number-account" type="number" />
                  </label>

                  <label className="flex flex-col">
                    Data de Emissão:
                    <Input name="number-account" type="date" />
                  </label>

                  <label className="flex flex-col">
                    Número da Vencimento:
                    <Input name="number-account" type="date" />
                  </label>

                  <label className="flex flex-col">
                    Valor:
                    <Input name="number-account" type="text" />
                  </label>
                </div>

                <label className="flex gap-2">
                  <Input name="number-account" type="checkbox" />
                  Retenção de Impostos:
                </label>

                <fieldset className="border flex flex-wrap">
                  <legend>Dados:</legend>
                  <label className="flex gap-2">
                    ISSQN:
                    <Input name="number-account" type="text" />
                  </label>

                  <label className="flex gap-2">
                    IRRF:
                    <Input name="number-account" type="text" />
                  </label>

                  <label className="flex gap-2">
                    CSLL:
                    <Input name="number-account" type="text" />
                  </label>

                  <label className="flex gap-2">
                    COFINS:
                    <Input name="number-account" type="text" />
                  </label>

                  <label className="flex gap-2">
                    INSS:
                    <Input name="number-account" type="text" />
                  </label>

                  <label className="flex gap-2">
                    PIS:
                    <Input name="number-account" type="text" />
                  </label>
                </fieldset>

                <label className="flex gap-2">
                  <Input name="number-account" type="checkbox" />
                  Retenção Técnica:
                </label>

                <fieldset className="border flex flex-wrap">
                  <legend>Dados:</legend>
                  <label className="flex gap-2">
                    Valor:
                    <Input name="number-account" type="text" />
                  </label>

                  <label className="flex gap-2">
                    Percentual:
                    <Input name="number-account" type="text" />
                  </label>
                </fieldset>

                <label className="flex gap-2">
                  Anexar Arquivo:
                  <Input name="number-account" type="file" />
                </label>

                <div className="flex w-full justify-end gap-10">
                  <button className="bg-yellow-400 px-12 py-1">Anterior</button>
                  <button className="bg-green-600 px-12 py-1">Próximo</button>
                </div>
              </Form>
            </div>
          </main>
        </Container>
      </DivContainerContracts>
    </>
  );
};

export default Invoice;
