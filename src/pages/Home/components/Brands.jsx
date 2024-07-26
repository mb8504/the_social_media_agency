import React from 'react'

function Brands() {
  return (
    <section>
        <div className='siteContainer text-center'>
            <div>
                Our Clients
            </div>
            <ul className='grid lg:grid-cols-6 md:grid-cols-4 smGrid'>
                <li className='font-sans text-xl'><img src="public/makeupbrand.png" alt="" /></li>
                <li className='font-sans text-xl'><img src="public/clothingbrand.png" alt="" /></li>
                <li className='font-sans text-xl'><img src="public/icecreambrand.png" alt="" /></li>
                <li className='font-sans text-xl'><img src="public/recordbrand.png" alt="" /></li>
                <li className='font-sans text-xl'><img src="src/assets/photobrand.png" alt="" /></li>
                <li className='font-sans text-xl'>BioInsights</li>
            </ul>
        </div>
    </section>
  )
}

export default Brands