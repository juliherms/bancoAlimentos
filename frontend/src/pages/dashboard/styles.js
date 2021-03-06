import styled from "styled-components";

export const Container = styled.div`

    max-width: 600px;
    margin: 50px auto;

    display:flex;
    flex-direction: column;

    header{
        display: flex;
        align-self: center;
        align-items: center;

        strong {
            color:#fff;
            font-size: 24px;
            margin: 0 15px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Entidade = styled.li`

    padding:20px;
    border-radius: 4px;
    background:#fff;
    cursor:pointer;

    strong {
        display: block;
        color: #7159c1;
        font-size: 20px;
        font-weight:normal;
    }

    span {
        display: block;
        margin-top: 3px;
        color:#666;
    }

`;