# Use an existing image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update gcc
RUN apk add --update redis

# Tell the image what to do when it starts as a conteiner
CMD ["redis-server"]