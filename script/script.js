//Variables required
// const addMonitor = document.getElementById('addMonitor');
// const minusMonitor = document.getElementById('minusMonitor');
// const addKeyboard = document.getElementById('addKeyboard');
// const minusKeyboard = document.getElementById('minusKeyboard');
// const addCPU = document.getElementById('addCPU');
// const minusCPU = document.getElementById('minusCPU');
// const addMouse = document.getElementById('addMouse');
// const minusMouse = document.getElementById('minusMouse');
// const addPrinter = document.getElementById('addPrinter');
// const minusPrinter = document.getElementById('minusPrinter');
// const addWebcam = document.getElementById('addWebcam');
// const minusWebcam = document.getElementById('minusWebcam');
// const totalItemsCount = document.getElementById('totalItemsCount');
// const totalCartValue = document.getElementById('totalCartValue');
// const monitorCount = document.getElementById('monitorCount');
// const keyboardCount = document.getElementById('keyboardCount');
// const cpuCount = document.getElementById('cpuCount');
// const mouseCount = document.getElementById('mouseCount');
// const printerCount = document.getElementById('printerCount');
// const webcamCount = document.getElementById('webcamCount');
// const monitorContainer = document.getElementById('monitor-container');
// const keyboardContainer = document.getElementById('keyboard-container');
// const CPUContainer = document.getElementById('CPU-container');
// const mouseContainer = document.getElementById('mouse-container');
// const printerContainer = document.getElementById('printer-container');
// const webcamContainer = document.getElementById('webcam-container');
const pricePerMonitor = 100;
const pricePerKeyboard = 6;
const pricePerCPU = 200;
const pricePerMouse = 6;
const pricePerPrinter = 100;
const pricePerWebcam = 30;

// console.log(totalItemsCount.textContent);
// console.log(totalCartValue.textContent);
// console.log(parseInt(monitorCount.textContent));
// console.log(parseInt(keyboardCount.textContent));
// console.log(parseInt(cpuCount.textContent));
// console.log(parseInt(mouseCount.textContent));
// console.log(parseInt(printerCount.textContent));
// console.log(parseInt(webcamCount.textContent));

//Add cart value and cart items also
function addCart(item, cart, price) {
    let currentItemsInCart = (parseInt(document.getElementById(item).textContent));
    let currentCartPrice = (parseInt(document.getElementById(cart).textContent));
    
    document.getElementById(item).textContent = currentItemsInCart + 1;
    document.getElementById(cart).textContent = currentCartPrice + price;
}

//Substract cart value and cart items also
function substractCart(item, cart, price) {
    let currentItemsInCart = (parseInt(document.getElementById(item).textContent));
    let currentCartPrice = (parseInt(document.getElementById(cart).textContent));
    
    document.getElementById(item).textContent = currentItemsInCart - 1;
    document.getElementById(cart).textContent = currentCartPrice - price;
}


//Monitor Functions
function addMonitorCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    // console.log(currentItemQuantity);
    if(currentItemQuantity == 5) {
        alert("Only 5 units could be bought at one time.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity + 1;
        addCart(itemID, cartID, pricePerMonitor);
    }
}

function substractMonitorCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    if(currentItemQuantity == 0){
        alert("Item quantity cannot be in negative.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity - 1;
        substractCart(itemID, cartID, pricePerMonitor);
    }
}



//Keyboard Functions
function addKeyboardCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    // console.log(a);
    if(currentItemQuantity == 10) {
        alert("Only 10 units could be bought at one time.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity + 1;
        addCart(itemID, cartID, pricePerKeyboard);
    }
}

function substractKeyboardCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    if(currentItemQuantity == 0){
        alert("Item quantity cannot be in negative.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity - 1;
        substractCart(itemID, cartID, pricePerKeyboard);
    }
}

//CPU Functions
function addCPUCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    // console.log(currentItemQuantity);
    if(currentItemQuantity == 5) {
        alert("Only 5 units could be bought at one time.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity + 1;
        addCart(itemID, cartID, pricePerCPU);
    }
}

function substractCPUCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    if(currentItemQuantity == 0){
        alert("Item quantity cannot be in negative.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity - 1;
        substractCart(itemID, cartID, pricePerCPU);
    }
}

//Mouse Functions
function addMouseCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    // console.log(a);
    if(currentItemQuantity == 10) {
        alert("Only 10 units could be bought at one time.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity + 1;
        addCart(itemID, cartID, pricePerMouse);
    }
}

function substractMouseCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    if(currentItemQuantity == 0){
        alert("Item quantity cannot be in negative.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity - 1;
        substractCart(itemID, cartID, pricePerMouse);
    }
}

//Printer Functions
function addPrinterCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    // console.log(currentItemQuantity);
    if(currentItemQuantity == 3) {
        alert("Only 3 units could be bought at one time.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity + 1;
        addCart(itemID, cartID, pricePerPrinter);
    }
}

function substractPrinterCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    if(currentItemQuantity == 0){
        alert("Item quantity cannot be in negative.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity - 1;
        substractCart(itemID, cartID, pricePerPrinter);
    }
}

//Webcam Functions
function addWebcamCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    // console.log(a);
    if(currentItemQuantity == 2) {
        alert("Only 2 units could be bought at one time.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity + 1;
        addCart(itemID, cartID, pricePerWebcam);
    }
}

function substractWebcamCount(id, itemID, cartID) {
    let currentItemQuantity = parseInt(document.getElementById(id).textContent);
    if(currentItemQuantity == 0){
        alert("Item quantity cannot be in negative.");
    }else{
        document.getElementById(id).textContent = currentItemQuantity - 1;
        substractCart(itemID, cartID, pricePerWebcam);

    }
}

// //creating event listeners for adding the items
// addMonitor.addEventListener('click', addMonitorCount('monitorCount'));
// addKeyboard.addEventListener('click', add(keyboardContainer));
// addCPU.addEventListener('click', add(CPUContainer));
// addMouse.addEventListener('click', add(mouseContainer));
// addPrinter.addEventListener('click', add(printerContainer));
// addWebcam.addEventListener('click', add(webcamContainer));

// //creating event listeners for substracting the items
// minusMonitor.addEventListener('click',);
// minusKeyboard.addEventListener('click',);
// minusCPU.addEventListener('click',);
// minusMouse.addEventListener('click',);
// minusPrinter.addEventListener('click',);
// minusWebcam.addEventListener('click',);
