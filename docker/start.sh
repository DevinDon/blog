docker build -t blog-server server
docker stack deploy -c docker-compose.yml blog
