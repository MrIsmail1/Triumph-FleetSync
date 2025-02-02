import {Prisma} from "../../platforms/express/src/config/prisma.db";
import {DriverRepository} from "../../../application/repositories/DriverRepository";
import {DriverEntity} from "../../../domain/entities/DriverEntity";
import {MotorbikeEntity} from "../../../domain/entities/MotorbikeEntity.ts";

export class PrismaDriverRepository implements DriverRepository {
    constructor(private readonly prisma: Prisma) {
    }

    public async findAll(): Promise<DriverEntity[]> {
        const drivers = await this.prisma.driver.findMany({
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
        return drivers.map(record => DriverEntity.reconstitute({
            id: record.id,
            firstName: record.firstName,
            lastName: record.lastName,
            email: record.email,
            companyOrDealerShipId: record.companyOrDealerShipId,
            motorbikeId: record.motorbikeId,
            createdAt: new Date(),
            updatedAt: new Date(),
            userFirstName: record.companyOrDealerShip.firstName,
            userLastName: record.companyOrDealerShip?.lastName,
        }));
    }

    public async findAllByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<DriverEntity[] | null> {
        const drivers = await this.prisma.driver.findMany({
            where: {companyOrDealerShipId},
        });
        return drivers.length ? drivers.map(DriverEntity.reconstitute) : null;
    }

    public async findByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<DriverEntity | null> {
        const driver = await this.prisma.driver.findFirst({
            where: {companyOrDealerShipId},
        });
        return driver ? DriverEntity.reconstitute(driver) : null;
    }

    public async findById(driverId: string): Promise<DriverEntity | null> {
        const driver = await this.prisma.driver.findUnique({
            where: {id: driverId},
        });
        return driver ? DriverEntity.reconstitute(driver) : null;
    }

    public async findByIdAndCompanyOrDealershipId(driverId: string, companyOrDealerShipId: string): Promise<DriverEntity | null> {
        const driver = await this.prisma.driver.findFirst({
            where: {id: driverId, companyOrDealerShipId},
        });
        return driver ? DriverEntity.reconstitute(driver) : null;
    }

    public async deleteByIdAndCompanyOrDealershipId(driverId: string, companyOrDealershipId: string): Promise<DriverEntity | null> {
        const driver = await this.findByIdAndCompanyOrDealershipId(driverId, companyOrDealershipId);
        if (!driver) return null;
        await this.prisma.driver.delete({where: {id: driverId}});
        return driver;
    }

    public async save(driverEntity: DriverEntity): Promise<DriverEntity> {
        const driver = await this.prisma.driver.create({
            data: {
                id: driverEntity.identifier,
                firstName: driverEntity.firstName.value,
                lastName: driverEntity.lastName.value,
                email: driverEntity.email.value,
                companyOrDealerShipId: driverEntity.companyOrDealerShipId,
                motorbikeId: driverEntity.motorbikeId ?? null,
                createdAt: driverEntity.createdAt,
                updatedAt: driverEntity.updatedAt,
            },
        });
        return DriverEntity.reconstitute(driver);
    }

    public async update(driverEntity: DriverEntity): Promise<DriverEntity[]> {
        await this.prisma.driver.update({
            where: {id: driverEntity.identifier},
            data: {
                firstName: driverEntity.firstName.value,
                lastName: driverEntity.lastName.value,
                email: driverEntity.email.value,
                companyOrDealerShipId: driverEntity.companyOrDealerShipId,
                motorbikeId: driverEntity.motorbikeId ?? null,
                updatedAt: driverEntity.updatedAt,
            },
        });
        return this.findAll();
    }

    public async delete(driverId: string): Promise<void> {
        await this.prisma.driver.delete({where: {id: driverId}});
    }
}
