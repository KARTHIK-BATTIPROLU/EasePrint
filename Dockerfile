# ==========================================
# Stage 1: Build Frontend (React + Vite)
# ==========================================
FROM node:20-alpine AS frontend-builder

WORKDIR /frontend

# Copy frontend dependency manifests
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copy frontend source code and build production bundle
COPY frontend/ ./
RUN npm run build

# ==========================================
# Stage 2: Production Python Runtime
# ==========================================
FROM python:3.11-slim AS app-runtime

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend application code
COPY app/ ./app/

# Create empty runtime directories (local dev state excluded by .dockerignore)
RUN mkdir -p config logs uploads

# Copy built frontend assets from Stage 1 into frontend/dist
COPY --from=frontend-builder /frontend/dist ./frontend/dist

# Expose standard FastAPI port
EXPOSE 8000

# Default command starts Uvicorn ASGI server
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

