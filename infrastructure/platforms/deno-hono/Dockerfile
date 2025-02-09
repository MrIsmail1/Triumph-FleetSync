FROM denoland/deno:2.1.7

# The port that your application listens to.
EXPOSE 1923

WORKDIR /usr/app/infrastructure/platforms/deno-hono

# These steps will be re-run upon each file change in your working directory:
COPY . .

RUN deno cache main.ts

