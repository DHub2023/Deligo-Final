// import React from "react";
// import TbLanguageHiragana from "react-icons/tb";
// import Link from "next/link";

// const LanguageSwitcher = () => {
//   return (
//     <div>
//       <div className="relative inline-block text-left ml-7">
//         <div>
        
//           <button
//             type="button"
//             className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//             id="menu-button"
//             aria-expanded="true"
//             aria-haspopup="true"
//           >

//             English
//             <svg
//               className="-mr-1 h-5 w-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="absolute right-0 z-10 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//           tabIndex={-1}
//         >
//           <div className="py-1" role="none">
//             {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
//             <Link
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//               id="menu-item-0"
//             >
//               English
//             </Link>
//             <Link
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//               id="menu-item-1"
//             >
//               Hindi
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LanguageSwitcher;


import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function App() {
  const [selected, setSelected] = React.useState(new Set(["Language"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="danger" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="English">English</Dropdown.Item>
        <Dropdown.Item key="Hindi">Hindi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

