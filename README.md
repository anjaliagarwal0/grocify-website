# Grocify Website (React + Vite)

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Docker (build + run)

### 1) Build and run with Docker Compose

```bash
docker compose up --build
```

This will:
- build the image using `Dockerfile`
- start an Nginx container serving the Vite production build

### 2) Open the website

Go to:
- http://localhost:8080

### 3) Stop the containers

```bash
docker compose down
```

## Notes

- `Dockerfile` is multi-stage:
  - Node stage builds the Vite app (`npm run build`)
  - Nginx stage serves the compiled assets from `dist/`

