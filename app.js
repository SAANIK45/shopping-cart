//update case value
function updateCaseNumber(isIncreasing){
    const caseValue = document.getElementById('case-value');
    let caseNumber = caseValue.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1 ;
    }else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) -1 ;
        
    }
    //update case number
    caseValue.value = caseNumber;
    const caseTotal =  document.getElementById('case-total');
    const casePrice = parseInt(caseTotal.innerText);
    caseTotal.innerText = caseNumber * 59;
    

}
document.getElementById('case-plus').addEventListener('click',function(){
   updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber(false)  
});
