import Link from 'next/link';

const LinkButton = ({ link }) => {
  return (
    <Link href={""} className="bg-slate-200 hover:bg-slate-500 border-gray-600  text-black font-medium   py-2 px-4 rounded-2xl" >
       
        Others
      
    </Link>
  );
};

export default LinkButton;
