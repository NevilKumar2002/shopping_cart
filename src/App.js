import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Home from './Components/Home.js';
import Cart from './Components/Cart.js';
import CheckoutSidebar from './Components/CheckoutSidebar.js';
import Navbar from './Components/Navbar.js';
import {Routes} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{border:"2px solid red"}}>
          <Navbar />
          <Routes >
          
           <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}






export default App;

































// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from "./Components/Home.js"
// import Cart from './Components/Cart.js'
// import CheckoutSidebar from './Components/CheckoutSidebar.js';
// import { Provider } from 'react-redux';
// import store from "./store.js";

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/"><Home /></Link>
//               </li>
//               <li>
//                 <Link to="/cart"><Cart /></Link>
//               </li>
//             </ul>
//           </nav>

          
            
          
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;


{/* <Provider store={store}>

<Home />

</Provider> */}