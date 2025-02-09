
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  isVerified: 'isVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DriverHistoricalScalarFieldEnum = {
  id: 'id',
  driverId: 'driverId',
  motorbikeId: 'motorbikeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationCodeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  userAgent: 'userAgent'
};

exports.Prisma.MaintenanceScalarFieldEnum = {
  id: 'id',
  motorbikeId: 'motorbikeId',
  companyOrDealerShipId: 'companyOrDealerShipId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  maintenanceDate: 'maintenanceDate',
  mileageAtMaintenance: 'mileageAtMaintenance',
  maintenanceType: 'maintenanceType',
  maintenanceCost: 'maintenanceCost',
  maintenanceDescription: 'maintenanceDescription',
  breakdownId: 'breakdownId',
  warrantyId: 'warrantyId'
};

exports.Prisma.DriverScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  companyOrDealerShipId: 'companyOrDealerShipId',
  frenchLicenseNumber: 'frenchLicenseNumber',
  dateDeliveryLicence: 'dateDeliveryLicence',
  dateExpirationLicense: 'dateExpirationLicense',
  frenchTypeMotorbikeLicense: 'frenchTypeMotorbikeLicense',
  restrictionConditions: 'restrictionConditions',
  experience: 'experience',
  motorbikeId: 'motorbikeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MotorbikeScalarFieldEnum = {
  id: 'id',
  modelId: 'modelId',
  fleetId: 'fleetId',
  companyOrDealerShipId: 'companyOrDealerShipId',
  driverId: 'driverId',
  licensePlate: 'licensePlate',
  vehicleIdentificationNumber: 'vehicleIdentificationNumber',
  color: 'color',
  mileage: 'mileage',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BreakdownScalarFieldEnum = {
  id: 'id',
  companyOrDealerShipId: 'companyOrDealerShipId',
  description: 'description',
  actionTaken: 'actionTaken',
  resolved: 'resolved',
  resolutionDate: 'resolutionDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WarrantyScalarFieldEnum = {
  id: 'id',
  validFrom: 'validFrom',
  validUntil: 'validUntil',
  providerName: 'providerName',
  warrantyDetails: 'warrantyDetails',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FleetScalarFieldEnum = {
  id: 'id',
  companyOrDealerShipId: 'companyOrDealerShipId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModelMotorbikeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  brand: 'brand',
  maintenanceIntervalKm: 'maintenanceIntervalKm',
  maintenanceIntervalTimeMonths: 'maintenanceIntervalTimeMonths',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TryScalarFieldEnum = {
  id: 'id',
  dealershipId: 'dealershipId',
  driverId: 'driverId',
  motorbikeId: 'motorbikeId',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MotorbikeIncidentScalarFieldEnum = {
  id: 'id',
  companyOrDealerShipId: 'companyOrDealerShipId',
  driverId: 'driverId',
  motorbikeId: 'motorbikeId',
  incidentType: 'incidentType',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  DriverHistorical: 'DriverHistorical',
  VerificationCode: 'VerificationCode',
  Session: 'Session',
  Maintenance: 'Maintenance',
  Driver: 'Driver',
  Motorbike: 'Motorbike',
  Breakdown: 'Breakdown',
  Warranty: 'Warranty',
  Fleet: 'Fleet',
  ModelMotorbike: 'ModelMotorbike',
  Try: 'Try',
  MotorbikeIncident: 'MotorbikeIncident'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
