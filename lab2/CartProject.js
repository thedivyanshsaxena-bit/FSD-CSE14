import readline from "readline/promises";    //to take user input
import { stdin, stdout } from "process";    // to display input on console
import { readFile, writeFile } from 'fs/promises';

// Database Using File Starts
const FILE="product.json";
const getCart=async()=>{
    const data=await readFile(FILE,"utf-8");
    return JSON.parse(data);    // parse means convert data into json and return 
};

const saveCart=async(cart)=>{
    await writeFile(FILE,JSON.stringify(cart, null ,2));   // null means not filter data if user give other extra data it is also write in file ,2 means gives spce of 2 bit after every product
};

const addToCart=async(product)=>{
    const cart=await getCart();
    const isFoundInCart=cart.find((item)=>item.id===product.id);
    if(isFoundInCart){
        isFoundInCart.qty+=1;
    }
    else cart.push(product);
    
    await saveCart(cart);
    console.log(`${product.name} added/updated to 🛒`);
};

const displayCart=async()=>{
    const cart=await getCart();
    if(cart.length==0){
        console.log("\n\n🛒 is empty\n\n");
        return;
    }
    console.table(cart);                                               //table give in tabular form means array with index 
    const total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);   //reduce function ends the need of loop
    console.log(`Total Payable Amount Rs. ${total}`);
};

const main=async()=>{
    let choice;
    const cin=readline.createInterface({input:stdin, output:stdout });
    do{
    console.log("Welcome To Amazon Shopping 🛒")   // ctrl + i to generate icon
    console.log("1........Show Cart")
    console.log("2........Add Product")
    console.log("3........Remove Product")
    console.log("4........Update Quantity")
    console.log("5........Checkout")
    choice=await cin.question('enter your choice:');  // await to wait till user give input and it is used in main so it is async
    switch(Number(choice)){
        case 1:
            displayCart();
            break;
        case 2:
            const item= await cin.question("enter ID,name,price,Qty:");
            const [id,name,price,qty]=item.split(',').map((p)=>p.trim());
            await addToCart({
                id:Number(id),
                name,
                price:Number(price),
                qty:Number(qty),

            });
            break;
        case 3:
            console.log('Remove Product');
            break;
        case 4:
            console.log('Update Quantity');
            break;
        case 5:
            console.log('Checkout');
            break;
        default:
            console.log("Invalid Choice");
            break;
    }
    } while(choice!=5);
cin.close();
};
main();