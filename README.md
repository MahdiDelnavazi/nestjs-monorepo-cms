# Customer Management System (CMS) - Backend

This is a **backend project** built using:
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **NX Monorepo**: A powerful tool for managing multiple applications and libraries in a single repository.
- **TypeORM**: An ORM for TypeScript and JavaScript that supports PostgreSQL.
- **PostgreSQL**: A powerful, open-source relational database.
- **Docker**: A platform for containerizing applications.

The project is fully dockerized and can be run with a single command: `docker-compose up --build`.

---

## Technologies

- **NestJS**: Backend framework.
- **NX Monorepo**: Monorepo management.
- **TypeORM**: Object-Relational Mapping (ORM) for PostgreSQL.
- **PostgreSQL**: Relational database.
- **Docker**: Containerization.
- **JWT**: JSON Web Tokens for authentication.

---

## Getting Started

### Prerequisites

- **Node.js**: v16 or higher.
- **Docker**: Installed and running.
- **Docker Compose**: Installed.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:MahdiDelnavazi/nestjs-monorepo-cms.git
   cd nestjs-monorepo-cms
2. Copy and Ready .env file:
   ```bash
   cp .env.example .env
3. Run dockerfile
     ```bash
   docker compose up --build
