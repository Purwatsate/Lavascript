
export const TestForm = () => {

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Button clicked!");
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Form submitted! ${e.target.value}`);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={handleInput} 
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Click Me</button>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
