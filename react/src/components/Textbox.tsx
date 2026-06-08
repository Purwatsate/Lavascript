export const Textbox = () => {

  const showConsole = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Enter text here"
        onChange={(e) => showConsole(e)}
      />
    </div>
  );
};
