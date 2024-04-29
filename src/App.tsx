import "./App.css";
import Library from "./components/Library";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { Book } from "./constant/types";
import { useState, FC } from "react";

const App: FC = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [library, setLibrary] = useState<Book[]>([]);

  const addBookToLibrary = (newBook: Book) => {
    setLibrary((prevLibrary) => [...prevLibrary, newBook]);
  };

  return (
    <div>
      <NavBar setIsOpenNav={setIsOpenNav} />
      {isOpenNav && <Summary />}
      <Library library={library} />
      <button onClick={addBookToLibrary}>Add Book</button>
    </div>
  );
};

export default App;
