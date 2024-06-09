import { FC } from "react";

interface FormProps {
  onSubmit: () => void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Total pages" />
        <input type="text" placeholder="Completed pages" />
      </form>
    </div>
  );
};

export default Form;
