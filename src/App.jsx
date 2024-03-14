// import Counter from "./component/counter/Counter";
import Login from "./component/login/Login";
import Signup from "./component/Signup/Signup";
import Homepage from "./component/Homepage/Homepage";
import Dogs from "./component/Dogs/Dogs";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DogDetails from "./component/DogDetails/DogDetails";
import Home from "./component/Home/Home";
import Reducer from "./component/Reducer/Reducer";
import Todo from "./component/Todo/Todo";
// import DogVotes from "./component/DogVotes/DogVotes";


function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Counter />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Todo />} />
          <Route path="/:id" element={<DogDetails />} />
          {/* <Route path="/dogvotes" element={<DogVotes />} /> */}
          {/* <Route path="/dogvotes" element={<DogVotes />} /> */}

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App