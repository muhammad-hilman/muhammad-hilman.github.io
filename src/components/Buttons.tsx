interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  children?: string;
}

export default function Button({type='success', children}: ButtonProps) {
  return (
    <button 
      className={"btn btn-" + type}
    >
      {children}
    </button>
  )
}

export function CollapseSidebarButton() {
  return (
    <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
        <i className="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
    </button>
  )
}
