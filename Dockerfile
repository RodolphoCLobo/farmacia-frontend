FROM node:20-bullseye-slim

WORKDIR /app

# Atualiza libs do sistema
RUN apt-get update && apt-get install -y build-essential libstdc++6

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli@16.1.5

EXPOSE 4200

CMD /bin/sh -c "\
  npm install && \
  ng serve --host 0.0.0.0 --port 4200"
