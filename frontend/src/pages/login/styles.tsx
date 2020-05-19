import styled from 'styled-components';

export const Container = styled.div`

    height: 100vh;
    display:flex;
    align-items: stretch;
`;

export const Content = styled.div`
    
    display: flex;
    flex-direction: column;
    place-content: center;
    background-color: #FFF;
    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;

        }

        input {
            background-color: #FFF;
            border-radius: 10px;
            border: 2px solid #ff6961;
            padding: 16px;
            width: 100%;
        }
    }

`;