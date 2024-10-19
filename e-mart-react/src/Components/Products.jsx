import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../Helpers/Thareshold';
import ProductCart from './ProductCart';
import { useState } from 'react';
import { products } from '../utilits';
const Products = () => {
  const [modalData, setModalData] = useState({})
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
  const handleViewDetails =(pd)=>{
    setModalData(pd)
    document.getElementById('my_modal_5').showModal()
}
 
  return (
    <animated.section ref={ref} style={springs} id="products" className='mx-auto container py-12 text-center p-5'>
      <h2 className='text-4xl font-bold'>Our Products</h2>
      <p>This is the poducts section.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {
          products.map(product=><ProductCart handleViewDetails={handleViewDetails} modalData={modalData} product={product} key={product.id}></ProductCart>)
        }
      </div>
    </animated.section>
  );
};

export default Products;
