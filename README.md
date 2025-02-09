# Multi-Platform Clean Architecture Project

This repository demonstrates a multi-platform application built using Clean Architecture principles. The project supports multiple runtime platforms:

- **Express (Node.js)**
- **Deno-Hono (Deno)**
- **Next (Next.js)**

It uses two databases:
- **PostgreSQL** (accessed via [Prisma](https://www.prisma.io/))
- **MongoDB**

Both database configurations are centralized, allowing all platforms to share the same database clients and configuration while keeping business logic decoupled from infrastructure details.

---

## Table of Contents

- [Project Overview](#project-overview)
- [File Structure](#file-structure)
- [Centralized Database Configuration](#centralized-database-configuration)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Docker Compose Setup](#docker-compose-setup)
- [Running the Services](#running-the-services)
- [Running Database Migrations](#running-database-migrations)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is organized following Clean Architecture principles:

- **Domain & Application Layers:**  
  Define core business logic, use cases, entities, and repository interfaces.

- **Infrastructure Layer:**  
  Contains adapters (repository implementations) and centralized database configuration for both Prisma (PostgreSQL) and MongoDB.

- **Platforms Layer:**  
  Houses platform-specific code (Express, Deno-Hono, and Next) that wires together the business logic with the infrastructure implementations.

### Centralized Databases

Both Prisma (for PostgreSQL) and MongoDB clients are defined in a central location (`infrastructure/database`). This ensures a single source of truth for your database configuration and minimizes duplication across platform-specific code.

---

## File Structure

An overview of the repository structure:

```
.
├── application
│   ├── repositories
│   ├── services
│   └── usecases
├── domain
│   ├── entities
│   ├── errors
│   └── types
├── infrastructure
│   ├── adapters
│   ├── database
│   │   ├── prisma
│   │   ├── mongo
│   └── platforms
│       ├── deno-hono
│       ├── express
│       └── next
├── compose.yml
└── README.md
```

---

## Centralized Database Configuration

### Prisma (PostgreSQL)

- **Location:** `infrastructure/database/prisma/`
- **Schema:** Defined in `schema.prisma`
- **Config:** Instantiated in `prisma.config.ts`

### MongoDB

- **Location:** `infrastructure/database/mongo/`
- **Config:** Configured in `mongo.config.ts`

Repository adapters (in `infrastructure/adapters/repositories`) import these centralized clients to interact with the databases.

---

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- (Optional) Deno installed locally for development with the Deno-Hono service

---

## Environment Variables

Create a `.env` file at the root of the project with the following (example) variables:

```dotenv
# Docker compose env
NODE_ENV=development 
MONGO_INITDB_ROOT_USERNAME=your_user
MONGO_INITDB_ROOT_PASSWORD=your_password
POSTGRES_DB=your_db
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
DENO_ENV=development
```
Create a `.env` file at the root of the express folder with the following (example) variables:

```dotenv
# Express
NODE_ENV=development
APP_ORIGIN=http://localhost:3000
PORT=4004
DATABASE_URL=""
MONGO_URI=""
JWT_REFRESH_SECRET="ASECRET"
JWT_SECRET="ASECRET"
RESEND_API_KEY=""
EMAIL_SENDER=""
```
Create a `.env` file at the root of the deno folder with the following (example) variables:

```dotenv
# Deno
APP_ORIGIN=http://localhost:3000
PORT=4004
DATABASE_URL=""
MONGO_URI=""
```
Create a `.env` file at the root of the next folder with the following (example) variables:

```dotenv
# Next
NEXT_PUBLIC_EXPRESS_API_URL=http://localhost:4004/api
NEXT_PUBLIC_DENO_HONO_API_URL=http://localhost:8000/api
```

---

## Docker Compose Setup

To build and start all services, run:

```bash
docker compose up --build
```

This command will:

- Build each service container (Express, Deno, Next) using its own Dockerfile.
- Mount shared volumes (e.g., the centralized database code and adapters).
- Start the containers along with MongoDB and PostgreSQL databases.

---

## Running the Services

- **Express:**  Accessible on ports `4004` (`5555` For Prisma studio).
- **Deno-Hono:**  Accessible on port `8000`.
- **Next:**  Accessible on port `3000`.

Each service automatically installs dependencies (via `npm install` for Node-based services or via Deno’s module system) and starts in development mode.

---

## Running Database Migrations

To run Prisma migrations, execute the following command within the Express container:

```bash
docker compose exec express npx prisma migrate dev 
```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request detailing your changes.

For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

