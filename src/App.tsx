import "./App.css";
import Form from "./components/Form";
import Library from "./components/Library";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { Book } from "./constant/types";
import { useState, FC } from "react";

const App: FC = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [addIsClicked, setAddIsClicked] = useState(false);

  const [book, setBook] = useState<Book[]>([]);

  const toggleForm = () => {
    setAddIsClicked((prevState) => !prevState);
  };

  const addBook = (newBook: Book, e: { preventdefault: () => void }) => {
    e.preventdefault();
    setBook((prevBook) => [...prevBook, newBook]);
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden bg-slate-100 ${addIsClicked ? "opacity-25" : ""}`}
    >
      <NavBar setIsOpenNav={setIsOpenNav} />

      <div className="lg:hidden">{isOpenNav && <Summary />}</div>

      <div className="grid lg:grid-cols-2">
        {addIsClicked && (
          <div className="absolute">
            <Form onSubmit={addBook} />
          </div>
        )}
        <div className="group flex items-center justify-center py-40 ">
          <button
            onClick={toggleForm}
            className="h-[8rem] w-[6rem] transform rounded-lg bg-green-300 text-[5rem] text-white transition-transform duration-1000 group-hover:scale-150"
          >
            <div className="group-hover:animate-spinClockwise">+</div>
          </button>
        </div>
        <div className="hidden lg:block">
          <Summary />
        </div>
      </div>
      <Library book={book} />
    </div>
  );
};

export default App;
