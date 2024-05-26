'use client'
import React from 'react'
import Lottie from 'react-lottie'

const ConfettiAnimation = ({ copied }: { copied: boolean }) => {
  return (
    <Lottie
      options={{
        loop: copied,
        autoplay: copied,
        animationData: require('@/data/confetti.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />
  )
}

export default ConfettiAnimation
