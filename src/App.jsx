import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";

function App() {
  const { isLoading, error, errorKey } = useSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loading />}
      {/* {error && <MessageBox key={errorKey} message={error} />} */}

      <Outlet />
    </>
  );
}

export default App;
