import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { aboutme } from '@/data';

const me = () => {
  return (
    <div className="lg:pt-24 py-24">
      <h1 className="heading">
        About{" "}
        <span className="text-purple">Me</span>
      </h1>

      <div className="flex flex-col items-center justify-center mt-12">     
          <InfiniteMovingCards
            item={aboutme}
          />  
      </div>
    </div>
  )
}

export default me
