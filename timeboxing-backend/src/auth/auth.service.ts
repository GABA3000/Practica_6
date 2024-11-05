import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
    validateUser(loginDto: LoginDto) {
        // Lógica de autenticación básica (puedes agregar validación con base de datos y JWT)
        if (loginDto.email === 'john.doe@example.com' && loginDto.password === 'password123') {
            return { message: 'Usuario autenticado', token: 'token_de_ejemplo' };
        }
        return { message: 'Credenciales inválidas', statusCode: 401 };
    }
}
