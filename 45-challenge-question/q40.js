function makeAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = makeAlbum("atifaslam", "pakistani songs");
var album2 = makeAlbum("artij singh", "bollywood songs");
var album3 = makeAlbum("honey singh", "hollywood songs");
console.log(album1);
console.log(album2);
console.log(album3);
function makeAlbum1(artistName, albumTitle, trackNumber) {
    return { artistName: artistName, albumTitle: albumTitle, trackNumber: trackNumber };
}
var album4 = makeAlbum1("atifaslam", "pakistani songs", 39);
var album5 = makeAlbum1("artij singh", "bollywood songs", 40);
var album6 = makeAlbum1("honey singh", "hollywood songs", 67);
console.log(album4);
console.log(album5);
console.log(album6);
