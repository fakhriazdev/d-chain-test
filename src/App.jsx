import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  const { isLoading, error, errorKey } = useSelector((state) => state.ui);
  return (
    <>
      {isLoading && <Loading />}
      <Outlet />
    </>
  );
}

export default App;
