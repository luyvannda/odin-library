const Summary = () => {
  return (
    <div className="absolute flex min-h-[100vh] w-[70vw] flex-col items-center justify-center bg-slate-200 opacity-90">
      <h1 className="font-semibold text-gray-600">Information</h1>

      <p className="flex w-[50vw] items-center justify-between text-violet-800">
        <span>Books</span>
        <span>0</span>
      </p>

      <p className="flex w-[50vw] items-center justify-between text-violet-800">
        <span>Completed Books</span>
        <span>0</span>
      </p>

      <p className="flex w-[50vw] items-center justify-between text-violet-800">
        <span>Total Pages</span>
        <span>0</span>
      </p>

      <p className="flex w-[50vw] items-center justify-between text-violet-800">
        <span>Completed</span>
        <span>0</span>
      </p>
    </div>
  );
};

export default Summary;
