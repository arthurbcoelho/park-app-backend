import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VagaEntity } from "../vagas/vaga.entity";
import { VeiculoEntity } from "../veiculos/veiculo.entity";

@Entity({ name: 'vagas_ocupadas' })
export class VagaOcupadaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    vagaId: string;

    @Column()
    vagaCodigo: string;

    @OneToOne(() => VagaEntity)
    @JoinColumn({ name: 'vagaId' })
    vaga: VagaEntity;

    @Column()
    veiculoId: number;

    @Column()
    placaVeiculo: string;

    @OneToOne(() => VeiculoEntity)
    @JoinColumn({ name: 'veiculoId' })
    veiculo: VeiculoEntity;

    @Column({ type: 'timestamp' })
    horaInicio: Date;

    @Column({ type: 'timestamp', nullable: true })
    horaFim?: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precoHora: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precoTotal: number;

    @Column({ default: false })
    finalizada: boolean;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precoFixo: number;
}