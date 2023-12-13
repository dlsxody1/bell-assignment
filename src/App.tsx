import "./App.css";
import UserForm from "./components/UserForm";
import AddUserButton from "./components/Button/AddUserButton";
import ConfirmButton from "./components/Button/ConfirmButton";
import UserResult from "./components/UserResult";

function App() {
  return (
    <>
      <div className="flex flex-col  justify-start ">
        <UserForm />
        <div className="mt-[10px] flex ">
          <AddUserButton />
          <ConfirmButton />
        </div>
        <UserResult />
      </div>
    </>
  );
}

export default App;
