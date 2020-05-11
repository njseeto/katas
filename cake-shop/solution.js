// Use the array index to identify which orders were first.

// Function --> input 3x arrays, output boolean

const serviceChecker = ( takeOutOrders, dineInOrders, servedOrders ) => {

    // Base case is when the servedOrders array has no more orders in it
    if(servedOrders.length == 0){
        return true
    } 

    // Check if there are any takeOutOrders and if the first matches the first from the servedOrders
    if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]){

        // Calls the method, removing the first element in the array
        return serviceChecker(takeOutOrders.splice(1), dineInOrders, servedOrders.splice(1))

    } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]){
        // does the same logic here but with the dinerInOrders
        return serviceChecker(takeOutOrders, dineInOrders.splice(1), servedOrders.splice(1))

    } else return false
}

module.exports = serviceChecker