import React from 'react'

const Plan_video = () => {
    	const payment_video = "../../../public/payment.mov"

  return (
    <div>

 
{/* <div className="w-full max-w-5xl aspect-video mb-5">
        <iframe
          className="w-full h-full rounded"
          src="https://www.youtube.com/embed/1lRK_AFhlv0?si=rG4sj6UxAtVfeZWj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}

      		<video className="h-2/3 w-2/3 mx-auto md:mb-20" controls>
  <source src={payment_video} type="video/mp4"  />
  Your browser does not support the video tag.
</video>

    </div>
  )
}

export default Plan_video
