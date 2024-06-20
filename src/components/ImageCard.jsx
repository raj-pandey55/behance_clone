import React, {useRef, useState, useEffect} from "react";
import { imageItems } from "../../data";
import { IoIosFolderOpen } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function ImageCard() {

  const dialogRef = useRef(null);
  const [activeImg, setActiveImg] = useState();
  // console.log(activeImg);

  useEffect(() => {
    if(!activeImg) return;

    dialogRef.current?.showModal();

    document.body.style.overflow = "hidden";

    dialogRef.current?.addEventListener("close", closeModal);

    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    }
  }, [activeImg]);

  const closeModal = () => {
    dialogRef.current?.close();
    setActiveImg(undefined);
    document.body.style.overflow = "";

  }

  return (
    <>
    <dialog ref={dialogRef} className="backdrop:bg-black/85 relative overflow-visible">
      <div className="relative z-0 max-w-[90vw] max-h-[90vh]">
      {activeImg && (<img src={activeImg.Img} alt={activeImg.Text} width={700} height={300}/>)}
      </div>
      <button onClick={closeModal} className="flex absolute z-1 -top-2 -right-2 items-center justify-center w-5 h-5 bg-zinc-200 rounded-full shadow"><IoClose/></button>
      
    </dialog>
    <section className="w-full">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4 py-5 px-5">
        {imageItems.map((item) => (
          <button onClick={() => setActiveImg(item)} className="card-item cursor-pointer outline-none">
            <div className="card-img h-72 relative overflow-hidden rounded-md">
              <div className="bg-blur"></div>
              <img
                src={item.Img}
                alt={item.Text}
                className="w-full h-full"
              />
              <div className="save-button absolute top-2 left-2 flex gap-1 items-center bg-gray-700 text-white rounded-full px-3 py-1 text-xs">
                <div className="save-icon">
                  <IoIosFolderOpen />
                </div>
                <span>Save</span>
              </div>
            </div>
            <div className="card-content py-3">
              <div className="card-user flex items-start justify-between text-xs font-acumin-pro">
                <div className="text-content">   
                <p className="font-bold text-sm">{item.Text}</p>
                <p className="text-black">{item.Author}</p>
                </div>
                <div className="button flex items-center justify-between gap-2 ">
                  <div className="like-button flex items-center gap-1 text-[#959595]">
                    <BiSolidLike />
                    <span className="text-black">{item.Like}</span>
                  </div>
                  <div className="watch-button flex items-center gap-1 text-[#959595]">
                    <IoMdEye />
                    <span className="text-black">{item.Watch}</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
    </>
  );
}

export default ImageCard;
