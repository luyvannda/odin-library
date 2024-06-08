const Summary = () => {
  return (
    <div className="absolute flex min-h-[100vh] w-[70vw] flex-col items-center justify-center bg-slate-200 opacity-90 lg:static lg:min-h-[50vh] lg:w-[50vw]">
      <div className="h-[1px] w-[55vw] bg-gray-600"></div>
      <h2 className="p-2 text-lg font-semibold text-gray-600">Information</h2>
      <div className="h-[0.5px] w-[55vw] bg-gray-600"></div>

      <div className="space-y-1 p-2">
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
      <div className="h-[1px] w-[55vw] bg-gray-600"></div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div>
          <div className="h-[1px] w-[55vw] bg-gray-600"></div>
          <h2 className="p-2 text-center text-lg font-semibold text-gray-600">
            Reset Library?
          </h2>
          <div className="h-[0.5px] w-[55vw] bg-gray-600"></div>
        </div>
        <button className="rounded-md bg-red-500 py-1 text-white">Reset</button>
        <div className="h-[1px] w-[55vw] bg-gray-600"></div>
      </div>

      <div className="mt-6">
        <div className="h-[0.5px] w-[55vw] bg-gray-600"></div>
        <p className="p-2 text-center text-gray-600">
          Made by{" "}
          <a
            className="text-violet-800"
            href="https://github.com/luyvannda"
            target="_blank"
          >
            Luy Vannda
          </a>
        </p>
        <div className="h-[0.5px] w-[55vw] bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Summary;
