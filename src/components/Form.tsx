import { FC } from "react";
import { Book } from "../constant/types";

interface LibraryProps {
  book: Book[];
}

const Form: FC<LibraryProps> = ({ book }) => {
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
        {book.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.pages}</td>
            <td>{item.readStatus ? "Read" : "Not Read"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Form;
