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

