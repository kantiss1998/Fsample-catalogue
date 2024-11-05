import React from "react";

import instagram from "../assets/icons/sosmed/icons8-instagram.svg";
import youtube from "../assets/icons/sosmed/icons8-youtube.svg";
import tiktok from "../assets/icons/sosmed/icons8-tiktok.svg";
import shopee from "../assets/icons/sosmed/icons8-shopee.svg";

const Footer = () => {
  return (
    <footer className="bg-[#C4C4BC] text-black p-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Judul Footer</h2>
        <p className="mb-6">
          Ini adalah isi footer. Anda bisa menambahkan informasi penting,
          deskripsi singkat, atau pesan lainnya di sini.
        </p>
      </div>
      <hr className="border-gray-600 mb-6" />
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-300"
          >
            <img src={instagram} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-300"
          >
            <img src={youtube} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-300"
          >
            <img src={tiktok} />
          </a>
          <a
            href="https://shopee.co.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-300"
          >
            <img src={shopee} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
