/*import{EventEmitter} from "node:events";

class orderSystem extends EventEmitter{      // by extend all properties of EventEmitter class will be inherited by orderSystem class
    placeOreder(order){
        console.log(`order received : #${order.id} for ${order.customerName}`);
        console.log("saving order to database");
        this.emit("orderPlaced", order);   // emit is used to trigger the event and orderPlaced is the name of event and order is the parameter which we are passing to the event
    }
}

const orderObj = new orderSystem();
// sending email to customer when order is placed
orderObj.on('order placed', (order) => {   // on is used to listen the event and orderPlaced is the name of event and order is the parameter which we are passing to the event
    console.log(`sending confirmation email to ${order.email}`);
});

// inventory service to update inventory when order is placed
orderObj.on('order placed', (order) => {
    order.forEach((item) => {
        console.log(`reducing stock of  ${item.name} by ${item.qty}`);
    });
});

// shipping service to ship the order when order is placed
orderObj.on('order placed', (order) => {
    console.log(`creating shipping label for order #${order.id}`);
});*/


import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(`order received : #${order.id} for ${order.customerName}`);
    console.log("Saving order to database");
    this.emit("orderPlaced", order);
  }
}
const orderObj = new OrderSystem();
// sending email
orderObj.on("orderPlaced", (order) => {
  console.log(`Sending confirmation email to ${order.email}`);
});
// inventory service
orderObj.on("orderPlaced", (order) => {
  order.items.forEach((item) => {
    console.log(`Reducing stock of ${item.name} by ${item.qty}`);
  });
});

//shipping service
orderObj.on("orderPlaced", (order) => {
  console.log(`Creating shipping label for order # ${order.id}`);
});

//Logging
orderObj.on("orderPlaced", (order) => {
  console.log(`Logging order ${order.id} - total # ${order.total}`);
});

//Error
orderObj.on("error", (err) => {
  console.log(`Error in order ${err}`);
});

orderObj.placeOrder({
  id: "ORD10001",
  customerName: "Ramesh Solanki",
  email: "ramesh.sol27@gmail.com",
  items: [
    { name: "wireless mouse", qty: 1 },
    { name: "wireless headset", qty: 2 },
  ],
  total: 2399,
});