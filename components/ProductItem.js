/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';
export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className=" w-full ">
      <Link href={`/product/${product.slug}`}>
        <a href="#">
          <img
            className=" object-cover rounded-lg "
            src={product.image}
            alt={product.name}
          />
        </a>
      </Link>
      <div className="px-5 pb-5">
        <div className="flex mt-3 justify-between items-center">
          <Link href={`/product/${product.slug}`}>
            <a href="#">
              <h5 className="text-xl font-normal tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
          </Link>
          <h5 className="text-lg font-normal tracking-tight text-gray-900 dark:text-white">
            {product.brand}
          </h5>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            href="#"
            onClick={() => addToCartHandler(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
