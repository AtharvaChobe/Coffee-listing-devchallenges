import React from 'react'

const Card1 = ({ container }) => {

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>

        {
          container.map((item) => {
            return (
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='relative'>
                  <img src={item.image} alt="" className='rounded-md' />
                  {item.popular ? <h3 className='text-charcoal bg-mustard px-2 text-sm rounded-2xl absolute top-2 left-2'>Popular</h3> : ""}
                </div>

                <div className='flex items-center justify-between w-full'>
                  <h3 className='text-cream'>{item.name}</h3>
                  <span className='text-black bg-light-green px-2 py-1 rounded-lg'>{item.price}</span>
                </div>

                <div className='flex items-center justify-between w-full'>

                  {item.rating
                    ?
                    <span className='flex justify-center items-center gap-1 text-sm'>
                      <img src="/Star_fill.svg" alt="" />
                      <h3 className='text-cream'>{item.rating}</h3>
                      <h3 className='text-slate'>({item.votes} votes)</h3>
                    </span>
                    :
                    <span className='flex justify-center items-center gap-1'>
                      <img src="/Star.svg" alt="" />
                      <h3 className='text-slate'>No Rating</h3>
                    </span>
                  }
                  {!item.available ? <h3 className='text-red-400'>Sold Out</h3> : ""}
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Card1