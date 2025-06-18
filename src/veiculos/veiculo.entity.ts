import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'veiculos' })
export class VeiculoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    modelo: string;

    @Column()
    placa: string;

    @Column()
    cor: string;

    @Column()
    nomeProprietario: string;

    @Column()
    contatoProprietario: string;

    @Column('int')
    marcaId: number;

    @Column()
    marcaNome: string;

    @Column('int')
    tipoId: number;

    @Column()
    tipoNome: string;
}