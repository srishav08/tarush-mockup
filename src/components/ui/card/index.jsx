export function Card({ children, className = '', ...props }) {
    return (
      <div
        className={`bg-white rounded-2xl shadow-md overflow-hidden ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = '', ...props }) {
    return (
      <div className={`p-6 ${className}`} {...props}>
        {children}
      </div>
    );
  }
  