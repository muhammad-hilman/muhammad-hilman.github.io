import { ReactNode, useState } from 'react'

interface AlertProps {
  type?: '' | ' alert-dismissible show'
  children: ReactNode;
}

function Alert({children, type=''}: AlertProps) {
  const [dismissState, setDismissState] = useState(type);
  
  return (
    <div className={"alert alert-danger" + type} > {children} </div>
  )
}

export default Alert
