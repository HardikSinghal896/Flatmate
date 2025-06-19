import fs from 'fs';
class Todo{
    todo;
    constructor(todoArray){
        this.todo= todoArray;
    }
    addItem(str){
        this.todo.push(str)
    }
    removeElement(indexOfTodo){
        this.todo.splice(indexOfTodo,1);
    }
    update(index, updatedTodo){
        this.todo[index] = updatedTodo;
    }
    getAll(){
        return this.todo;
    }
    get(indexOfTodo){
        return this.todo[index];
    }
    clear(){
        this.todo.splice(0,this.todo.length);
    }
}
let myTodo = new Todo([]);
myTodo.addItem("adsf");
myTodo.addItem("adsf");
myTodo.addItem("adsf");
myTodo.addItem("adsf");
myTodo.addItem("adsf");
myTodo.removeElement(1);

// myTodo.clear();
console.log(myTodo.getAll());

// fs.readFile("../a.txt","utf-8",function(err,data){
// 	data = data + 'Hi there yo'
// 	fs.writeFile("../a.txt",data,(err)=>{
// 		console.log(err);
// 	});
// 	console.log(data,"data");
// })

async function checkingTheAsync(){
	for(let i=0 ; i<100000 ; i++){
	}
	console.log("checkingTheAsync");
}
// checkingTheAsync();

// setTimeout(()=>{
// 	console.log("asdfaf");
// 	setTimeout(()=>{
// 		console.log("asfd");
// 	},1000)
// },1000)

function myOwnSetTimeout(duration){
	let p = new Promise(function (resolve){
		setTimeout(()=>{resolve("hi in myOwnSetTimeOut")},0);
	})
	return p;
}
function onDone(data){
	console.log(data);
}
const value = myOwnSetTimeout(1000);
console.log(value);
value.then(onDone);

// function sumOfTwoNumber(n1,n2,callback){
// 	let value1 = callback(n1);
// 	let value2 = callback(n1);
// }
// function callback(n1,n2){
// 	console.log(n1,n2)
// 	console.log("in Callback")
// }
// sumOfTwoNumber(1,2,callback);


//Read a file, remove all the extra spaces and write it back to the same file.

fs.readFile("../a.txt","utf-8",function(err,data){
	let str = data;
	let newstr = str.replace(/\s+/g, ' ');
	console.log(newstr);
	fs.writeFile("../a.txt",newstr,function(err){
		console.log(err);
	})

})

// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?
let hours = 0;
let minutes = 0;
let seconds = 0;
function startTimer(){
	seconds++;
	if(seconds > 60){
		minutes++;
		seconds=0;
	}
	if(minutes > 60){
		hours++;
		minutes = 0;
	}
	console.log("timer is: ",hours,":",minutes,":",seconds);
}
setInterval(startTimer,1000);

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function returnPromiseAfterNSeconds(){
	const value = new Promise(function(resolve){
		resolve("Done");
	})
	return value;
}
function wait(n) {
	const timeOut = setTimeout(returnPromiseAfterNSeconds,n*1000);
	console.log(timeOut);
}
wait(2);