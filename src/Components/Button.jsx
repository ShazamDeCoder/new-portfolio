import React from 'react'

const Button = ({ children, variant = "primary" }) => {
    const base = "px-6 py-3 rounded-lg font-semibold transition";
  const styles = {
    primary: `${base} bg-purple-600 text-white hover:bg-purple-700`,
    secondary: `${base} border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white`,
  };
  return (
    <div>
      <button className={styles[variant]}>{children}</button>
    </div>
  )
}

export default Button
