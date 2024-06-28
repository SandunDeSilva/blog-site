import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Springboot from "./components/post/springboot/Springboot";
import Django from "./components/post/django/Django";
import DjangoWithAWS from "./components/post/django_with_aws/DjangoWithAWS";

function App() {
  return (
    <Router basename="/">
      <div>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/posts" element={<Homepage />} />
          <Route path="/post/springboot" element={<Springboot />} />
          <Route path="/post/django" element={<Django />} />
          <Route path="/post/django_with_aws" element={<DjangoWithAWS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
