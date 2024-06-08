import "./App.css";
import Form from "./components/Form";
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

  const addBook = (newBook: Book) => {
    setBook((prevBook) => [...prevBook, newBook]);
  };

  return (
    <div>
      <NavBar setIsOpenNav={setIsOpenNav} />

      <div className="lg:hidden">{isOpenNav && <Summary />}</div>

      <div className="grid grid-cols-2">
        {addIsClicked && <Form book={book} onSubmit={addBook} />}
        <div className="bg-slate-100 px-4 py-3">
          <button onClick={toggleForm} className="bg-green-400 px-4 py-3">
            Add Book
          </button>
        </div>
        <div className="hidden lg:block">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default App;
