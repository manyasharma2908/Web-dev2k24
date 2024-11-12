// promise: 
// 1.fullfiled status(state):fulfilled , result :value;
// 2.pending
// 3.rejected status:rejected , result : error or whatever you have written

// creater:creates a promise
// consumer:consumes a promise , it has two methods 1. .then (contains output for resolve )2. .catch(contains output for catch)

let p=new Promise((resolve,reject)=>{
    let a=10;
    let b=20;
    if(a+b > 50){
        resolve(a+b);
    }
    else{
        reject("sum of a + b is less than 50");
    }

})

// consumer 
p.then((res)=>{
    console.log(res)

}).catch((err)=>{
    console.log(err)
})

// now we returning it in a function 
// We can solve the call back hell problem by .then and .catch
function sum(){
    return new Promise((resolve,reject)=>{
        let obj = {
            name : "Bhumika",
            age: 20,
        };
        if(obj.name=="Bhumika"){
            resolve(obj);
        }
        else{
            reject("object is not identified");
        }
    
    })

}

sum().then((res)=>{
    console.log(res);
    res.class=3;
    return res;

}).then((newRes)=>{
    console.log(newRes);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{ //for memory cleanup
    console.log("always run");
})

// asynchronous function
async function prom(){
    let output =await p; //await means wait on this line until the output comes
    try{
        console.log(output)
    }
    catch(error){
        console.log(error)
    }
}
