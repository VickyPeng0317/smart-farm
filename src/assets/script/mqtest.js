var mqtt = require('mqtt');
var opt = {
  port: 1883,
  clientId: 'nodejasdasds'
};

var client = mqtt.connect('tcp://163.17.136.70', opt);

client.on('connect', function() {
  console.log('success');
  client.subscribe('andy_test/tmp_t', function (err) {
    if (!err) {
      client.publish('test/andy', 'andy_test/tmp_t')
    }
    console.log(123);
  });
  client.subscribe('test/andy', function (err) {
    if (!err) {
      client.publish('test/andy', 'test/andy')
    }
    console.log(123);
  });
});

client.on('message', function (topic, msg) {
  console.log(`topic: ${topic}, msg: ${msg}`);
});
