import { Prisma } from "../../platforms/express/src/config/prisma.db";
import {ModelMotorbikeRepository} from "../../../application/repositories/ModelMotorbikeRepository.ts";
import {ModelMotorbikeEntity} from "../../../domain/entities/ModelMotorbikeEntity.ts";

export class PrismaModelMotorbikeRepository implements ModelMotorbikeRepository {
    constructor(private readonly prisma: Prisma) {}

    async findAll(): Promise<ModelMotorbikeEntity[]> {
        const models = await this.prisma.modelMotorbike.findMany();
        return models.map((model) =>
            ModelMotorbikeEntity.reconstitute({
                id: model.id,
                name: model.name,
                brand: model.brand,
                maintenanceIntervalKm: model.maintenanceIntervalKm,
                maintenanceIntervalTimeMonths: model.maintenanceIntervalTimeMonths,
                createdAt: model.createdAt,
                updatedAt: model.updatedAt,
            })
        );
    }

    async findByClientId(clientId: string): Promise<ModelMotorbikeEntity[]> {
        const models = await this.prisma.modelMotorbike.findMany({
            where: { motorbikes: { some: { fleet: { clientId } } } },
        });
        return models.map((model) =>
            ModelMotorbikeEntity.reconstitute({
                id: model.id,
                name: model.name,
                brand: model.brand,
                maintenanceIntervalKm: model.maintenanceIntervalKm,
                maintenanceIntervalTimeMonths: model.maintenanceIntervalTimeMonths,
                createdAt: model.createdAt,
                updatedAt: model.updatedAt,
            })
        );
    }

    async findById(modelMotorbikeId: string): Promise<ModelMotorbikeEntity | null> {
        const model = await this.prisma.modelMotorbike.findUnique({
            where: { id: modelMotorbikeId },
        });
        if (!model) return null;

        return ModelMotorbikeEntity.reconstitute({
            id: model.id,
            name: model.name,
            brand: model.brand,
            maintenanceIntervalKm: model.maintenanceIntervalKm,
            maintenanceIntervalTimeMonths: model.maintenanceIntervalTimeMonths,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
        });
    }

    async save(modelMotorbikeEntity: ModelMotorbikeEntity): Promise<ModelMotorbikeEntity> {
        const model = await this.prisma.modelMotorbike.create({
            data: {
                id: modelMotorbikeEntity.identifier,
                name: modelMotorbikeEntity.name.value,
                brand: modelMotorbikeEntity.brand.value,
                maintenanceIntervalKm: modelMotorbikeEntity.maintenanceIntervalKm,
                maintenanceIntervalTimeMonths: modelMotorbikeEntity.maintenanceIntervalTimeMonths,
                createdAt: modelMotorbikeEntity.createdAt,
                updatedAt: modelMotorbikeEntity.updatedAt,
            },
        });

        return ModelMotorbikeEntity.reconstitute({
            id: model.id,
            name: model.name,
            brand: model.brand,
            maintenanceIntervalKm: model.maintenanceIntervalKm,
            maintenanceIntervalTimeMonths: model.maintenanceIntervalTimeMonths,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
        });
    }

    async update(modelMotorbikeEntity: ModelMotorbikeEntity): Promise<ModelMotorbikeEntity[]> {
        await this.prisma.modelMotorbike.update({
            where: { id: modelMotorbikeEntity.identifier },
            data: {
                name: modelMotorbikeEntity.name.value,
                brand: modelMotorbikeEntity.brand.value,
                maintenanceIntervalKm: modelMotorbikeEntity.maintenanceIntervalKm,
                maintenanceIntervalTimeMonths: modelMotorbikeEntity.maintenanceIntervalTimeMonths,
                updatedAt: modelMotorbikeEntity.updatedAt,
            },
        });

        return this.findAll();
    }

    async delete(modelMotorbikeId: string): Promise<void> {
        await this.prisma.modelMotorbike.delete({
            where: { id: modelMotorbikeId },
        });
    }
}
