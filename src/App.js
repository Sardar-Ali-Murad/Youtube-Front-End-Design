import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Landing,Error,ProtectedRoute} from  "./components/index.js"
import {Home,SingleVedio,Channel,Subscription,Library,History,Register,Login} from "./pages/index"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/singleVedio" element={<SingleVedio/>}/>
          <Route path="/channel" element={<Channel/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/register" element={<Login/>}/>
          <Route path="*" element={<div>
            <h1>Soory The Page Not Found</h1>
            <Link to="/" style={{color:"blue",textDecoration:"underline"}}><p>Go Home</p></Link>
          </div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
