// import { ButtonStyle } from './styles'

type ButtonProps = {
  children?: any;
  className?: any;
  hrref?: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="p-2 w-32 btn btn-primary">{children}</button>
  )
}