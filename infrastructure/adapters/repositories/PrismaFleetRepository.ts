import {Prisma} from "../../platforms/express/src/config/prisma.db";
import {FleetRepository} from "../../../application/repositories/FleetRepository.ts";
import {FleetEntity} from "../../../domain/entities/FleetEntity.ts";
import {UserEntity} from "../../../domain/entities/UserEntity.ts";

export class PrismaFleetRepository implements FleetRepository {
    constructor(private readonly prisma: Prisma) {
    }

    public async findAll(): Promise<FleetEntity[]> {
        const fleets = await this.prisma.fleet.findMany();
        return fleets.map(FleetEntity.reconstitute);
    }

    public async findByManagerId(managerId: string): Promise<FleetEntity[] | null> {
        const fleets = await this.prisma.fleet.findMany({
            where: {managerId},
        });
        return fleets.map((fleet) =>
            FleetEntity.reconstitute({
                id: fleet.id,
                clientId: fleet.clientId,
                managerId: fleet.managerId,
                name: fleet.name,
                createdAt: fleet.createdAt,
                updatedAt: fleet.updatedAt,
            })
        );
    }

    public async findByClientId(clientId: string): Promise<FleetEntity[] | null> {
        const fleets = await this.prisma.fleet.findMany({
            where: {clientId},
        });
        return fleets.map((fleet) =>
            FleetEntity.reconstitute({
                id: fleet.id,
                clientId: fleet.clientId,
                managerId: fleet.managerId,
                name: fleet.name,
                createdAt: fleet.createdAt,
                updatedAt: fleet.updatedAt,
            })
        );
    }

    public async findById(fleetId: string): Promise<FleetEntity | null> {
        const fleet = await this.prisma.fleet.findUnique({
            where: {id: fleetId},
        });
        if (!fleet) return null;

        return FleetEntity.reconstitute({
            id: fleet.id,
            clientId: fleet.clientId,
            managerId: fleet.managerId,
            name: fleet.name,
            createdAt: fleet.createdAt,
            updatedAt: fleet.updatedAt,
        });
    }

    public async save(fleetEntity: FleetEntity): Promise<FleetEntity> {
        const fleet = await this.prisma.fleet.create({
            data: {
                id: fleetEntity.identifier,
                clientId: fleetEntity.clientId,
                managerId: fleetEntity.managerId,
                name: fleetEntity.name.value,
                createdAt: fleetEntity.createdAt,
                updatedAt: fleetEntity.updatedAt,
            },
        });

        return FleetEntity.reconstitute({
            id: fleet.id,
            clientId: fleet.clientId,
            managerId: fleet.managerId,
            name: fleet.name,
            createdAt: fleet.createdAt,
            updatedAt: fleet.updatedAt,
        });
    }

    public async update(fleetEntity: FleetEntity): Promise<FleetEntity[]> {
        await this.prisma.fleet.update({
            where: {id: fleetEntity.identifier},
            data: {
                clientId: fleetEntity.clientId,
                managerId: fleetEntity.managerId,
                name: fleetEntity.name.value,
                updatedAt: fleetEntity.updatedAt,
            },
        });

        return this.findAll();
    }

    public async delete(fleetId: string): Promise<void> {
        await this.prisma.fleet.delete({
            where: {id: fleetId},
        });
    }
}