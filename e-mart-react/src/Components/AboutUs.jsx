import React from 'react';
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../Helpers/Thareshold';


const AboutUs = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-45% 0px -45% 0px',
      amount: buildInteractionObserverThreshold(),
    }
  )
  return (
     <animated.section ref={ref} style={springs} id="about" className='mx-auto mt-10 container text-center'>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
     <div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 items-center justify-center">
          {/* About Us Title and Description */}
          <div className="mb-12">
           
            <p className="text-gray-600 text-lg leading-relaxed ">
              Welcome to PureSuper! We are dedicated to creating innovative
              solutions that drive positive change and empower communities. Our
              team of passionate professionals is committed to delivering
              excellence and inspiring others to embrace new technologies and
              opportunities. At PureSuper, we believe in the power of creativity
              and collaboration to solve the {`world's`} most pressing
              challenges. We strive to foster a culture of continuous learning
              and growth, where every idea is valued, and every voice is heard.
              Our focus is on building sustainable, scalable solutions that not
              only meet today’s needs but also anticipate the future. Join us on
              our journey as we work towards a brighter, more connected world.
            </p>
          </div>
          <div className="">
            <img
              className="rounded-full mx-auto mb-4 "
              src="/images/aboutus2.gif"
              alt="cart image"
             
            />
          </div>
        </div>
     </div>
   </animated.section>
  );
};

export default AboutUs;
