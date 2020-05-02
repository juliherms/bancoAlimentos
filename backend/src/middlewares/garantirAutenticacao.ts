import { Request ,Response ,NextFunction } from 'express';
import authConfig from '../config/auth';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

/**
 * Classe responsável por verificar o token de autenticacao
 * @param request - requisicao
 * @param response  - resposta
 * @param next - segue a chamada do fluxo.
 */
export default function garantirAutenticacao(
    request: Request,
    response: Response, 
    next :NextFunction): void {

        const authHeader = request.headers.authorization;

        if(!authHeader){
            throw new Error('JWT Token não informado');
        }

        const [,token] = authHeader.split(' ');

        try{
            const decoded = verify(token,authConfig.jwt.secret);

            const { sub } = decoded as TokenPayload;

            //adiciona o payload no request
            request.usuario = {
                id: sub,
            };

            return next(); //segue o fluxo

        } catch {
            throw new Error("JWT Token inválido");
        }
}