import { FC } from "react";
import { Book } from "../constant/types";

interface LibraryProps {
  library: Book[];
}

const Library: FC<LibraryProps> = ({ library }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Read</th>
        </tr>
      </thead>
      <tbody>
        {library.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            <td>{book.readStatus ? "Read" : "Not Read"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Library;
