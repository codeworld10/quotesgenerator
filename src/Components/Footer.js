import React from 'react'

const Footer = () => {
    const handleFooterClick = () => {
        window.open('https://www.maniwebdev.com', '_blank');
      };
  return (
    <div
    className='Footer'
    onClick={handleFooterClick}
    >Made with ❤️ by maniwebdev
    </div>
  )
}

export default Footer