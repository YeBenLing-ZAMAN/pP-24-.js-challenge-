function getSecondLargest(nums) {
    // Complete the function
    
    // make a array with unique number
    let uniqe = [];
    for (const number of nums){
        if(uniqe.indexOf(number)==-1){
            uniqe.push(number);
        }
    }

    // keno ei sort dile kaj kore na 
    let uniqesort = uniqe.sort();
    return uniqesort[uniqesort.length-1];
    
}

let nums =[1, 2 ,3 ,4 ,5 ,6 ,7 ,8, 9, 10];
getSecondLargest(nums);