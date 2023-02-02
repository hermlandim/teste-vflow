import { useRef } from 'react';
import Logo from '../../../docs/assets/logo.png';
import { Form } from '@unform/web';
import { DivContainerHome } from './styles';
import InputMask from '../../components/InputMask';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const onlyNumbers = (str: any) => str.replace(/[^0-9]/g, '');

const HomePage = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (data: any, { reset }: any) => {
    let cnpj = onlyNumbers(data.cnpj);

    let cnpjNumbers = { cnpj: cnpj };

    try {
      const schema = yup.object().shape({
        cnpj: yup
          .string()
          .matches(/.{14,}/, 'Deve conter no mínimo 14 dígitos')
          .required(),
      });
      await schema.validate(cnpjNumbers, {
        abortEarly: false,
      });

      navigate('/Contracts', { replace: true });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(error);
      }
    }

    reset();
  };

  return (
    <DivContainerHome>
      <figure className="max-w-xs">
        <img src={Logo} alt="Logo VFlows" />
      </figure>
      <h1 className="text-2xl font-bold">PAGAMENTO DE FORNECEDOR</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <label htmlFor="cnpj">
          CNPJ:
          <InputMask
            id="cnpj"
            name="cnpj"
            mask="99.999.999/9999-99"
            placeholder="Digite o CNPJ"
            className="border border-gray-300 rounded p-1.5"
          />
        </label>
        <button type="submit">Acessar</button>
      </Form>
    </DivContainerHome>
  );
};

export default HomePage;
