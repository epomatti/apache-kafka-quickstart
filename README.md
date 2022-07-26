# apache-kafka

```sh
docker-compose up -d
```

```sh
docker exec broker \
kafka-topics --bootstrap-server broker:9092 \
             --create \
             --topic quickstart
```

To make sure Kafka is up, test the Kafka server:

```sh
# Start the consumer in a separate shell
docker exec --interactive --tty broker kafka-console-consumer --bootstrap-server broker:9092 --topic quickstart --from-beginning

# Write test some messages
docker exec --interactive --tty broker kafka-console-producer --bootstrap-server broker:9092 --topic quickstart
```