import{ features } from "process"

function storeCarInfo(manufacture:string, modelName:string, ...extraoption:{[key:string]: any} []):
object{
    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraoption)
    }

    return carInfo;
}
let answer = storeCarInfo('honda', 'civic', {color:'black'}, {features:['navigation', 'power window']})
console.log(answer);
