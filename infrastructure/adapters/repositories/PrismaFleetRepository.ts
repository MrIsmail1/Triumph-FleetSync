import { Prisma } from "../../platforms/express/src/config/prisma.db";
import { FleetRepository } from "../../../application/repositories/FleetRepository.ts";
import { FleetEntity } from "../../../domain/entities/FleetEntity.ts";

export class PrismaFleetRepository implements FleetRepository {
    constructor(private readonly prisma: Prisma) {}

    public async findAll(): Promise<FleetEntity[]> {
        const fleets = await this.prisma.fleet.findMany({
            include: {
                companyOrDealerShip: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },

            },
        });
        return fleets.map((fleet) => {
            const fleetEntity = FleetEntity.reconstitute({
                id: fleet.id,
                companyOrDealerShipId: fleet.companyOrDealerShipId,
                name: fleet.name,
                userFirstName: fleet.companyOrDealerShip?.firstName,
                userLastName: fleet.companyOrDealerShip?.lastName,
                createdAt: fleet.createdAt,
                updatedAt: fleet.updatedAt,
            });


            return fleetEntity;
        });
    }

    public async findAllByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<FleetEntity[] | null> {
        const fleets = await this.prisma.fleet.findMany({
            where: { companyOrDealerShipId },
        });
        return fleets.length ? fleets.map(FleetEntity.reconstitute) : null;
    }

    public async findByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<FleetEntity | null> {
        const fleet = await this.prisma.fleet.findFirst({
            where: { companyOrDealerShipId },
            include: {
                companyOrDealerShip: {
                    select: { firstName: true, lastName: true },
                },
            },
        });
        return fleet ? FleetEntity.reconstitute(fleet) : null;
    }

    public async findById(fleetId: string): Promise<FleetEntity | null> {
        const fleet = await this.prisma.fleet.findUnique({
            where: { id: fleetId },
            include: {
                companyOrDealerShip: {
                    select: { firstName: true, lastName: true },
                },
            },
        });
        return fleet ? FleetEntity.reconstitute({
            id: fleet.id,
            companyOrDealerShipId: fleet.companyOrDealerShipId,
            name: fleet.name,
            userFirstName: fleet.companyOrDealerShip?.firstName,
            userLastName: fleet.companyOrDealerShip?.lastName,
            createdAt: fleet.createdAt,
            updatedAt: fleet.updatedAt,
        }) : null;
    }

    public async findByIdAndCompanyOrDealershipId(fleetId: string, currentUserIdentifier: string): Promise<FleetEntity | null> {
        const fleet = await this.prisma.fleet.findFirst({
            where: { id: fleetId, companyOrDealerShipId: currentUserIdentifier },
            include: {
                companyOrDealerShip: {
                    select: { firstName: true, lastName: true },
                },
            },
        });
        return fleet ? FleetEntity.reconstitute(fleet) : null;
    }

    public async deleteByIdAndCompanyOrDealershipId(fleetId: string, companyOrDealershipId: string): Promise<FleetEntity | null> {
        const fleet = await this.findByIdAndCompanyOrDealershipId(fleetId, companyOrDealershipId);
        if (!fleet) return null;
        await this.prisma.fleet.delete({ where: { id: fleetId } });
        return fleet;
    }

    public async save(fleetEntity: FleetEntity): Promise<FleetEntity> {
        const fleet = await this.prisma.fleet.create({
            data: {
                id: fleetEntity.identifier,
                companyOrDealerShipId: fleetEntity.companyOrDealerShipId,
                name: fleetEntity.name.value,
                createdAt: fleetEntity.createdAt,
                updatedAt: fleetEntity.updatedAt,
            },
        });
        return FleetEntity.reconstitute(fleet);
    }

    public async update(fleetEntity: FleetEntity): Promise<FleetEntity[]> {
        await this.prisma.fleet.update({
            where: { id: fleetEntity.identifier },
            data: {
                companyOrDealerShipId: fleetEntity.companyOrDealerShipId,
                name: fleetEntity.name.value,
                updatedAt: fleetEntity.updatedAt,
            },
        });
        return this.findAll();
    }

    public async delete(fleetId: string): Promise<void> {
        await this.prisma.fleet.delete({
            where: { id: fleetId },
        });
    }
}
