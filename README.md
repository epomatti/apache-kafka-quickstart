# Kafka Quickstart

Start Kafka:

```sh
docker-compose up -d
```

Create the topic:

```sh
docker exec broker kafka-topics --bootstrap-server broker:9092 --create --topic quickstart
```

Start the consumer:

```sh
# Install dependencies
yarn install

# Start the topic Consumer
yarn run consumer

# Start the topic Producer
```

### CLI

To make sure Kafka is up, test the Kafka server:

```sh
# Start the consumer in a separate shell
docker exec --interactive --tty broker kafka-console-consumer --bootstrap-server broker:9092 --topic quickstart --from-beginning

# Write test some messages
docker exec --interactive --tty broker kafka-console-producer --bootstrap-server broker:9092 --topic quickstart
```

### References

[Why is Kafka fast][1]

[1]: https://www.youtube.com/watch?v=UNUz1-msbOM