function makeAlbum(artistName:string , albumTitle:string){
    return {artistName , albumTitle}
}

let album1 = makeAlbum("atifaslam" , "pakistani songs")
let album2 = makeAlbum("artij singh" , "bollywood songs")
let album3 = makeAlbum("honey singh" , "hollywood songs")

console.log(album1)
console.log(album2)
console.log(album3)


function makeAlbum1(artistName:string , albumTitle:string , trackNumber:number){
    return {artistName , albumTitle , trackNumber}
}

let album4 = makeAlbum1("atifaslam" , "pakistani songs" , 39)
let album5 = makeAlbum1("artij singh" , "bollywood songs" , 40)
let album6 = makeAlbum1("honey singh" , "hollywood songs" , 67)

console.log(album4)
console.log(album5)
console.log(album6)