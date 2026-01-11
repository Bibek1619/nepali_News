import React from 'react'

const Title = ({title}) => {

    
  return (
    <div className='text-xl font-bold text-[#333333] relative before:absolute before:w-[5px] before:bg-[#c80000] before:h-full before:-left-0 pl-3'>
        
        <span className="text-black font-semibold">
  {title}
</span>



</div>
  )
}

export default Title