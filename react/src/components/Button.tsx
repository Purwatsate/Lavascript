

export const Button = () => {
    const showAlert= (text : string) => {
        alert(text);
    }
  return (
    <>
    <button className="btn btn-primary bg-black text-white" onClick={() => showAlert('Button clicked!')}>Click me</button>
    </>
  )
}
