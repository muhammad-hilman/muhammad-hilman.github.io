interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  children: string;
}

function Button({type='success', children}: ButtonProps) {
  return (
    <button 
      className={"btn btn-" + type}
    >
      {children}
    </button>
  )
}

export default Button
