import React from 'react'

import { ResponsiveImageContainer } from 'react-responsive-image-container'

const srcSet = [
  { path: 'https://via.placeholder.com/1920', size: 1920 },
  { path: 'https://via.placeholder.com/1200', size: 1200 },
  { path: 'https://via.placeholder.com/900', size: 900 },
  { path: 'https://via.placeholder.com/600', size: 600 },
  { path: 'https://via.placeholder.com/480', size: 480 },
  { path: 'https://via.placeholder.com/300', size: 300 }
]

const sizes = [
  { minWidth: '1366px', size: '300px' }, // if (window.innerWidth >= 1366px) { image.width = 300px }
  { minWidth: '1024px', size: '33vw' }, // if (window.innerWidth >= 1024px) { image.width = 33vw }
  { minWidth: '768px', size: '75vw' }, // if (window.innerWidth >= 768px) { image.width = 75vw }
  { minWidth: '0', size: '100vw' } // if (window.innerWidth >= 0) { image.style = 100vw }
]

const src = srcSet[0].path

export default function App() {
  return (
    <div className='App'>
      <ResponsiveImageContainer
        srcSet={srcSet}
        sizes={sizes}
        src={src}
        loading={'lazy'}
        className={'much-responsive'}
      />
    </div>
  )
}
