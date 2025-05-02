import React from 'react'

export default function Blob() {
    const blobStyle = {
        width: '300px',
        height: '300px',
        background: 'rgba(199, 160, 250, 1)',
        filter: 'blur(37.5px)',
        borderRadius: '60% 40% 50% 50% / 50% 50% 60% 40%',
        position: 'absolute',
        top: '05%',
        left: '0%',
        transform: 'translate(-50%, -50%)',
      };
      
  return (
    <div className='blob' style={blobStyle}>
    </div>
  )
}
