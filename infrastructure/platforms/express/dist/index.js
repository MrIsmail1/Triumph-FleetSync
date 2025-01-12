"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongo_db_1 = __importDefault(require("./config/mongo.db"));
const env_1 = require("./constants/env");
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: env_1.APP_ORIGIN,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
//auth routes
app.use("/api/auth", auth_route_1.default);
app.use(errorHandler_1.default);
app.listen(env_1.PORT, async () => {
    console.log(`Server is running on port ${env_1.PORT} in ${env_1.NODE_ENV} environment.`);
    await (0, mongo_db_1.default)();
});
