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
