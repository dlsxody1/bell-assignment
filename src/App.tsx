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
        <div className="mt-5 w-1/4 h-min bg-[#BFBFBF]">
          <UserResult />
        </div>
      </div>
    </>
  );
}

export default App;
