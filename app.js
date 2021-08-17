//update case value
function updateProductNumber(product,price,isIncreasing){
    const productValue = document.getElementById(product + '-value');
    let productNumber = productValue.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1 ;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1 ;
        
    }
    //update case number
    productValue.value = productNumber;
    const productTotal =  document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

}
function getInputValue(item){
    const itemInput = document.getElementById(item +'-value');
    const itemNumber = parseInt(itemInput.value);
    return itemNumber;
    
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    //update sub-total
    const productSubInput =  document.getElementById('sub-total');
    console.log(productSubInput);
    productSubInput.innerText = subTotal ;
}
//handle phone event 
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
});
//handle case event 
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)  
});
