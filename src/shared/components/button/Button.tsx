import MuiButton from '@mui/material/Button';

type ButtonProps = {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  href?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
    { 
      <MuiButton variant="outlined" href={props.href} onClick={props.onClick}>{props.children}</MuiButton>
    }
    </>
  )
}

export default Button;