import styled from 'styled-components';

export const DivContainerHome = styled.div`
  background-color: var(--color-grey-0);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  height: 65%;
  width: 40%;
  margin: 0 auto;

  border: 2px solid var(--color-grey-3);
  border-radius: 10px;
  box-shadow: 1px 1px 6px -1px grey;

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-grey-2);
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0px grey;
    gap: 2rem;

    width: 80%;
    padding: 1.5rem;

    label {
      display: flex;
      flex-direction: column;
    }

    button {
      border: 1px solid var(--color-button-1);
      border-radius: 4px;
      background-color: var(--color-button-1);
      box-shadow: 2px 2px 3px -1px grey;
      color: var(--color-grey-0);
      width: 70%;
      margin: 0 auto;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
