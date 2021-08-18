// import logo from './logo.svg';
// import './App.css';
import Header from './komponen/Header';
import Navbar from './komponen/Navbar';

// // pakai arrow component
// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <h3>ini adalah Navbar</h3>
//       </nav>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
