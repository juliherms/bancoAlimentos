import styled from 'styled-components';
import { darken } from 'polished';


export const Field = styled.div`

    flex: 1;  
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    label {
        font-size: 14px;
        margin-bottom: 8px;
    }
`;


export const FieldGroup = styled.div`

    
    flex: 1;
    display: flex;
    
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

    input {
        flex: 1;
        background: #f0f0f5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c6c80;
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
        margin-top: 5px;
        font-size: 16px;
        opacity: 0.8;
    }
    &:hover {
        opacity: 1;
    }

    header {
        padding-top: 5px;
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
            margin-top:1px;
            font-size: 22px;
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
