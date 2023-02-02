import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
:root{
  --color-button-1: #03a64d;
  --color-button-2: #ffbe00;
  --color-button-3: #67685a;
  --color-info:     #2c70b9;
  --color-border:   #f58686;
  --color-background: #eef0e2;

  --color-grey-0: #ffffff;
  --color-grey-1: #eeeeee;
  --color-grey-2: #dddddd;
  --color-grey-3: #aaaaaa;
  --color-grey-4: #000000;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body > div{
    font-family: 'Inter', sans-serif;
    height: 100vh;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    justify-content: center
}

button{
  cursor: pointer;
  border: none;
}
ul, ol, li{
  list-style: none; 
}
a{
  text-decoration: none;
}

img{
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6, p, span, li, label{
  color: var(--color-grey-4);
}

`;
