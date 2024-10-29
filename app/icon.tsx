import { ImageResponse } from 'next/og'

// Image metedata
export const size = {
  width: 32,
  height: 32
}

export const contentType = 'image/png'

// Image generation

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          fontFamily: 'Inter',
          borderRadius: '0.8rem',
          background: '#336Dff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        LA
      </div>
    ),
    {
      ...size
    }
  )
}
