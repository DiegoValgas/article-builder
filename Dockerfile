FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

# Setup workdir
WORKDIR /var/www/html

# Copy data to workdir
COPY ./app .

# Configure ports
EXPOSE 3000

CMD ["npx", "http-server", "-p", "3000"]