interface HeaderProps {
  title?: string;
}

export const Header = ({ title = "My App" }: HeaderProps) => {
  return (
    <div>{title}</div>
  )
}
