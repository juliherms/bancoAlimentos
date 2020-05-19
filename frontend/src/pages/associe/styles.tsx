import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`

    margin: 0;
	padding: 0;
	background-size: cover;
	background-position: center;
	font-family: sans-serif;
`;

export const Content = styled.div`
    
    width: 320px;
	height: 420px;
	background: #000;
	color: #fff;
	top: 50%;
	left: 50%;
	position: absolute;
	transform: translate(-50%,-50%);
	box-sizing: border-box;
	padding: 70px 30px;

    h1 {
	    margin: 0;
	    padding: 0 0 20px;
	    text-align: center;
	    font-size: 22px;
    }

    img {
	    width:100px;
	    height:100px;
	    border-radius: 50%;
	    position:absolute;
	    top: -50px;
	    left: calc(50% - 50px);
    }	

    input {
	    width: 100%;
	    margin-bottom: 20px;
    }

    p {
	    margin: 0;
	    padding: 0;
	    font-weight: bold;
    }

    input {
	
        border: none;
        border-bottom: 1px solid #fff;
        background:transparent;
        outline: none;
        height:40px;
        color:#fff;
        font-size: 16px;

    }

    button {
        width: 100%;
	    margin-bottom: 20px;
        border: none;
        outline: none;
        height: 40px;
        background: #fb2525;
        color: #fff;
        font-size: 16px;
        border-radius: 20px;

        &:hover{
			background: ${shade(0.2,'#fb2525')};
        }
    }

    a {
	    text-decoration: none;
	    font-size: 12px;
	    line-height: 20px;
	    color: darkgrey;

        &:hover {
	        color: #ffc107;
        }
    }
`;