import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'vagas' })
export class VagaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    codigo: string;

    @Column()
    coberta: boolean;

    @Column()
    comportaCamionete: boolean;

    @Column()
    isAtiva: boolean = true;

    @Column()
    reservada: boolean = false;
}