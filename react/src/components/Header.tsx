interface HeaderProps {
  title?: string;
  point: number;
}

export const Header = ({ title, point }: HeaderProps) => {
  return (
    <>
      {
        title ? <h1>{title}</h1> : <h1>Default Title</h1>
      }
      {
        title && <h1>{title}</h1>
      }
      <p>Point: {point}</p>
    </>
  )
}
