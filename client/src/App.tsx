import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar.tsx"
import { ShopPage, PurchasedItemsPage, CheckoutPage, AuthPage } from "./pages/index.tsx"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<ShopPage/>}/>
          <Route path="/auth" element = {<AuthPage/>}/>
          <Route path="/checkout" element = {<CheckoutPage/>}/>
          <Route path="/purchased-items" element = {<PurchasedItemsPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
