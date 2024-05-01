let magicians2: string[] = ["ainak wala jin" , "ram" , "hatoba"]

function  goodMagician(magicians2:string[]){
    for(let i=0; i<magicians2.length; i++){
        magicians2[i] = magicians2[i] +  "the best"
        }
}

function copyArray(arr:string[]){
    return[...arr]
}


function showMagician(magician:string[]){
    magician.forEach(element =>{
        console.log(element);
        
    })
}

const copyMagicianArray = copyArray(magicians2)
goodMagician(copyMagicianArray);

console.log("this is my original array");
showMagician(magicians2);

console.log("this is my modified array");
showMagician(copyMagicianArray);