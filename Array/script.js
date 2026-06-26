let arr=[1,2,3,4,5];
console.log(arr);

//add from last
arr.push(6);
console.log(`push=> ${arr}`);

//remove from last
arr.pop();
console.log(`pop=> ${arr}`);

//add from front
arr.unshift(0);
console.log(`unshift=> ${arr}`);


//remove from front
arr.shift();
console.log(`shift=> ${arr}`);



//Use of slice 
console.log(arr.slice(1,3)); //[ 2, 3 ]
console.log(arr);//return new array [ 1, 2, 3, 4, 5 ]

//Use of splice
//let arr=[1,2,3,4,5];
console.log(arr.splice(1,3)); //[ 2, 3, 4 ]
console.log(arr); //[ 1, 5 ]



//---------------------------------Loop-----------------------------------------------------

//forEach loop =>forEach() is a higher-order array method that iterates over each element of an array and executes a provided callback function. It does not return a new array.
let num=[1,4,2,3,7,5];
num.forEach((ele)=>{
    console.log(ele);
});

//map=>map() creates a new array by applying a function to every element of the original array. It does not modify the original array.
let ans=num.map((ele)=>{
    return ele*10;
});
console.log(ans);

//filter()=>filter() creates a new array containing only elements that satisfy a given condition.
let filterAns=num.filter((ele)=>{
    return ele>5;
});
console.log(filterAns);

//reduce=>reduce() executes a reducer function on each element of an array and returns a single accumulated value.
let reduceAns=num.reduce((sum,ele)=>{
    return sum+ele;
},0);
console.log(reduceAns);
