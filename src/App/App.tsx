
import "bootstrap/dist/css/bootstrap.min.css";
//import{Route, Routes} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Home from "../Components/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    //<div>App</div>
    <>

      <Container>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
