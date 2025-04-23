FROM node:20-alpine AS builder
WORKDIR /my-app-build
RUN apk add --no-cache python3 make g++ eudev-dev libusb-dev linux-headers eudev-libs
COPY package*.json ./
RUN npm install -g npm@latest 
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "x86_64" ]; then \
    npm install lightningcss-linux-x64-musl @tailwindcss/oxide-linux-x64-musl; \
    elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then \
    npm install lightningcss-linux-arm64-musl @tailwindcss/oxide-linux-arm64-musl; \
    elif [ "$ARCH" = "armv7l" ]; then \
    npm install lightningcss-linux-arm-musl @tailwindcss/oxide-linux-arm-musl; \
    elif [ "$ARCH" = "ppc64le" ]; then \
    npm install lightningcss-linux-ppc64le-musl @tailwindcss/oxide-linux-ppc64le-musl; \
    elif [ "$ARCH" = "s390x" ]; then \
    npm install lightningcss-linux-s390x-musl @tailwindcss/oxide-linux-s390x-musl; \
    else \
    echo "Unsupported architecture: $ARCH"; \
    echo "Available packages are for: x86_64, arm64, armv7l, ppc64le, s390x"; \
    exit 1; \
    fi
RUN npm ci
COPY . .
ARG API_URI
ARG SERVERSIDE_API_URI
ARG APP_NAME
ARG APP_URI
RUN chmod +x ./env.sh && ./env.sh
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /my-app
ENV NODE_ENV=production
RUN apk add --no-cache python3 libusb eudev make g++ linux-headers eudev-libs
COPY package*.json ./
RUN npm install -g npm@latest && npm ci --omit=dev

COPY --from=builder /my-app-build/server-wrapper.js /my-app/
COPY --from=builder /my-app-build/public /my-app/public
COPY --from=builder /my-app-build/.next/standalone /my-app/
COPY --from=builder /my-app-build/.next/static /my-app/.next/static

EXPOSE 3000
ENV PORT=3000
ENTRYPOINT ["node", "server-wrapper.js"]
