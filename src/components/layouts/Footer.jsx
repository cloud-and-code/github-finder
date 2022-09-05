import { FaHeart } from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer-center bg-gray-700 text-primary-content p-10'>
      <p>
        Build with {<FaHeart className='inline' />} in {footerYear}
      </p>
    </footer>
  )
}

export default Footer
