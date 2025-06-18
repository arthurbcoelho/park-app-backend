import { IsBoolean, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class VagaDto {
    @IsUUID('4', { message: 'O campo ID deve ser um UUID' })
    id: string;
    
    @IsString({ message: 'O campo codigo deve ser do tipo string' })
    @IsNotEmpty({ message: 'O campo codigo é obrigatório' })
    codigo: string
    
    @IsBoolean({ message: 'O campo deve ser boolean' })
    @IsNotEmpty({ message: 'O campo coberta é obrigatório' })
    coberta: boolean

    @IsBoolean({ message: 'O campo comportaCamionete deve ser boolean' })
    comportaCamionete: boolean
    
    @IsBoolean({ message: 'O campo isAtiva deve ser boolean' })
    isAtiva: boolean

    @IsBoolean({ message: 'O campo reservada deve ser boolean' })
    reservada: boolean
}