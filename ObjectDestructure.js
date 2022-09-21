// object destructuring 

const band = {
    bandName : "Vinay Tiwari",
    famousSong : "Billionaire",
    year : 2000,
    anotherFamousSong : "knowledge",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

//let {bandName, famousSong} = band;

//console.log(bandName, famousSong);

//supppose koi dusra name rakna chahta hai bandname ki jagah
// const {bandName : var1, famousSong} = band;

let {bandName, famousSong, ...resProps } = band;
console.log(resProps);
