import styled from 'styled-components';
import singInBackgroundImg from '../../assets/donate10.png';
import { darken } from 'polished';

export const Wrapper = styled.div`
     height: 100vh;
     background: url(${singInBackgroundImg}) no-repeat 700px bottom ;
`;  

export const Content = styled.div`

    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;
  
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    header {
      
    }

    main {
        flex: 1;
        max-width: 560px;
  
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-size: 54px;
        color: var(--title-color);
    }

    p {
        font-size: 24px;
        margin-top: 24px;
        line-height: 38px;
    }

    a {
        width: 100%;
        max-width: 360px;
        height: 72px;
        background: #e4605e;
        border-radius: 8px;
        text-decoration: none;
  
        display: flex;
        align-items: center;
        overflow: hidden;
  
        margin-top: 40px;

        span {
            display: block;
            background: rgba(0, 0, 0, 0.08);
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;

            svg {
                color: #FFF;
                width: 20px;
                height: 20px;
            }
        }

        strong {
            flex: 1;
            text-align: center;
            color: #FFF;
        }

        &:hover {
            background: ${darken(0.03,'#e4605e')};
        }
    }
  
`;