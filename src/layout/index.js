import { AlertContainer } from "components/Alert";
import Footer from "components/Footer";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "store";

function Layout({ children }) {
  return (
    <>
      <AlertContainer />
      <div className="container">
        <Provider store={store}>{children}</Provider>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
