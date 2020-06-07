import styled from 'styled-components';
import { darken } from 'polished';


export const Wrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

    input {
        background: rgba(0,0,0,0.1);
        border:0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;
        &::placeholder {
            color: rgba(255,255,255,0.7);
        }
    }

    label {
        font-size: 14px;
        margin-bottom: 8px;
     }
    span {
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
    }
    button {
        margin: 5px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight:bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size:16px;
        transition: background 0.2s;
        &:hover {
            background: ${darken(0.03,'#3b9eff')};
        }
    }
    a {
        color: #e4605e;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;
    }
    &:hover {
        opacity: 1;
    }

    header {
        padding-top: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        color:  #e4605e;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    svg {
        margin-right: 16px;
        color: var(--primary-color);
    }

    form {
        margin: 80px auto;
        padding: 64px;
        max-width: 730px;
        background: #fff;
        border-radius: 8px;

        display: flex;
        flex-direction: column;

        h1 {
            margin-top:5px;
            font-size: 36px;
        }

        fieldset {
            margin-top: 64px;
            min-inline-size: auto;
            border: 0;
        }

        legend {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;

            h2 {
                font-size: 24px;
            }

            span {
                font-size: 14px;
                font-weight: normal;
                color: var(--text-color);
            }
        }
    }
`;  
