# Alb Enerji CRM (MVP)

Bu repo, Alb Enerji için üretime hazır MVP CRM uygulamasını içerir. Yapı:

- `apps/frontend`: Next.js (App Router) + Tailwind + shadcn/ui
- `apps/backend`: NestJS + Prisma + PostgreSQL
- `packages/shared`: paylaşılan tipler ve Zod şemaları

## Hızlı Başlangıç

### 1) Altyapıyı başlatın

```bash
docker compose up -d
```

### 2) Backend migrations ve seed

```bash
cd apps/backend
cp .env.example .env
npm install
npx prisma migrate dev
npx prisma db seed
```

### 3) Backend ve Frontend çalıştırın

```bash
# Backend
cd apps/backend
npm run start:dev

# Frontend
cd apps/frontend
cp .env.example .env.local
npm install
npm run dev
```

### Demo kullanıcılar

- admin@alb.local / Password123!
- sales@alb.local / Password123!
- teknik@alb.local / Password123!
- partner@alb.local / Password123!

## Servisler

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Swagger: http://localhost:4000/docs

## Notlar

- RBAC backend seviyesinde enforced edilir.
- Audit log tüm create/update/delete aksiyonlarını tutar.
- Export/Import sadece yönetici rolünde açıktır.
