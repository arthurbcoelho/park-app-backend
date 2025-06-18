import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { UserEntity } from '../users/user.entity';
import * as bcrypt from 'bcryptjs';

export default class CreateUserSeed implements Seeder {
    public async run(dataSource: DataSource): Promise<void> {
        const userRepository = dataSource.getRepository(UserEntity);

        const exists = await userRepository.findOne({ where: { name: 'teste' } });
        if (!exists) {
            const passwordHash = await bcrypt.hash('test123', 10);
            await userRepository.save({
                name: 'teste',
                password: passwordHash,
            });
        }
    }
}