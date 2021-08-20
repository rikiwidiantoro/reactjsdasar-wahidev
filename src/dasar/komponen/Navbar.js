// import React from "react"
// s

// // function component
// function Navbar() {
//     return (
//         <h4>ini adalah teks Navbar function component</h4>
//     )
// }

// export default Navbar

// // penulisan lain function component >> export default digabung
// export default function Navbar() {
//     return (
//         <h4>ini adalah teks Navbar function component yg export default nya digabung</h4>
//     )
// }


// // class component || digunakan jika lingkup besar dan membutuhkan lifecycle component
// class Navbar extends Component {
//     render() {
//         return (
//             <h4>ini adalah teks Navbar class component</h4>
//         )
//     }
// }

// export default Navbar

// // penulisan lain class component >> export default digabung
// export default class Navbar extends Component {
//     render() {
//         return (
//             <h4>ini adalah teks Navbar class component yg export default nya digabung</h4>
//         )
//     }
// }


// // arrow variabel component || digunakan jika lingkup kecil dan tidak butuh lifecycle component
const Navbar = () => {
    return (
        <h4>ini adalah teks Navbar arrow variabel component</h4>
    )
}

export default Navbar;
