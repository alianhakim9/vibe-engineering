# vibe-engineering

Backend API dengan [Bun](https://bun.sh), [ElysiaJS](https://elysiajs.com), [Drizzle ORM](https://orm.drizzle.team), dan MySQL.

## Prasyarat

- [Bun](https://bun.sh) v1.1+
- Server MySQL yang berjalan

## Setup

1. Install dependency:

   ```bash
   bun install
   ```

2. Salin `.env.example` menjadi `.env`, lalu sesuaikan kredensial database:

   ```bash
   cp .env.example .env
   ```

   ```
   PORT=3000
   DATABASE_URL=mysql://user:password@localhost:3306/vibe_engineering
   ```

   Buat database-nya jika belum ada:

   ```sql
   CREATE DATABASE vibe_engineering;
   ```

3. Jalankan migrasi Drizzle:

   ```bash
   bun run db:migrate
   ```

## Menjalankan Server

```bash
bun run dev      # mode development (hot reload)
bun run start    # mode biasa
```

Health check: `GET http://localhost:3000/`

## Perintah Database

```bash
bun run db:generate   # generate migrasi dari schema (src/db/schema.ts)
bun run db:migrate    # jalankan migrasi
bun run db:studio     # buka Drizzle Studio
```

## Struktur

```
src/
  index.ts        # entry point Elysia
  db/
    index.ts      # koneksi database (Drizzle + mysql2)
    schema.ts     # definisi tabel
drizzle/          # file migrasi (hasil generate)
```
