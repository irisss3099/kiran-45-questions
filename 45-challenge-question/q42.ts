let magicians1: string[] = ["ainak wala jin" , "ram" , "hatoba"]

function  goodMagicians(magicians1:string[]){
    for(let i=0; i<magicians1.length; i++){
        magicians1[i] = magicians1[i] +  "the best"
        }
}


function showMagicians(magician:string[]){
    magician.forEach(element =>{
        console.log(element);
        
    })
}
goodMagicians(magicians1);
showMagicians(magicians1);

