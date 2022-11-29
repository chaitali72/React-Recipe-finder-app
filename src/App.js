import Header from "components/Header";
import navigationBar from "config/navigation";
import MainLayout from "layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Router>
        <Header />
        <div className="content">
          <Routes>
            {navigationBar.routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </div>
      </Router>
    </MainLayout>
  );
}

export default App;
