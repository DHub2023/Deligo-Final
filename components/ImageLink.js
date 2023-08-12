import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageLink = ({ imageUrl, linkUrl }) => {
  return (
    <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className="w-5 mr-15">
      <Image src={imageUrl} alt="Image Link" 
      className="hover:animate-bounce transition"
      width={70} 
      height={100}/>
    </Link>
  );
};

export default ImageLink;

