const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const quickstartTopic = 'quickstart'

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: quickstartTopic,
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
}

run().catch(console.error)