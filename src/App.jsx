import Counter from "./component/counter/Counter";
import Login from "./component/login/Login";
import Signup from "./component/Signup/Signup";
import Homepage from "./component/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App