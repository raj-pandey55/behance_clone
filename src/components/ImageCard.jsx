import React from "react";
import { imageItems } from "../../data";
import { IoIosFolderOpen } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";

function ImageCard() {

  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4 py-5 px-5">
        {imageItems.map((item) => (
          <div className="card-item cursor-pointer">
            <div className="card-img h-56 relative overflow-hidden rounded-md">
              <div className="bg-blur"></div>
              <img
                src={item.featureImg}
                alt={item.featureTxt}
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
                <p className="font-bold text-sm">{item.featureTxt}</p>
                <p className="text-black">{item.feUser}</p>
                </div>
                <div className="button flex items-center justify-between gap-2 ">
                  <div className="like-button flex items-center gap-1 text-[#959595]">
                    <BiSolidLike />
                    <span className="text-black">{item.feLike}</span>
                  </div>
                  <div className="watch-button flex items-center gap-1 text-[#959595]">
                    <IoMdEye />
                    <span className="text-black">{item.feWatch}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageCard;
