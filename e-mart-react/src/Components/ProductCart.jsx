/* eslint-disable react/prop-types */

const ProductCart = ({ product, modalData, handleViewDetails }) => {
  console.log(modalData);
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-2 h-[420px] duration-300">
      <img
        src={product.img}
        alt={product.title}
        className=" h-64 w-full  bg-cover"
      />
      <div className="p-4 bg-[#F4F4F4]">
        <h3 className="text-xl font-bold mb-3">{product.title}</h3>
        <p className="text-sm mb-4">{product.description}</p>
        <button
          onClick={() => handleViewDetails(product)}
          className="w-full bg-[#E3A244] text-white hover:bg-white hover:text-[#f09] duration-300  py-2 absolute left-0 bottom-0 rounded-b-lg transition-colors "
        >
          View Details
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <div className="flex justify-between items-center">
            <p className="text-xl">Product Details</p>
            <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="">
             
                <img className="h-7" src="/images/Icon_close.svg.png" alt="" />
              </button>
            </form>
          </div>
          </div>
          <hr />
          <img className="h-72 w-full mt-7 bg-cover" src={modalData.img} alt="" />
          <h3 className="font-bold text-lg">{modalData.title}</h3>
          <p className="py-4">
            {modalData.description}
          </p>
         <hr />

         <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-[#E3A244] text-white hover:bg-white hover:text-[#f09] duration-300 px-5 py-3 rounded-full">
             
               Close
              </button>
            </form>
          </div>
        
        </div>
      </dialog>
    </div>
  );
};

export default ProductCart;
