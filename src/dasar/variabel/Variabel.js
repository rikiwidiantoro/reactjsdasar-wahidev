// // const | scope
// const harga = 3000

// let | scope
// let harga = 3000
// if(true) {
//     let harga = 30
// }

// var | global
var harga = 3000
if(true) {
    var harga = 30
}




const Variabel = () => {
    return (
        <div>
            <h1>Belajar Variabel</h1>
            <p>harga : {harga}</p>
        </div>
    )
}

export default Variabel;