// export default function Footer() {
//   return (
//     <footer className="bg-blue-900 text-white text-center py-6 mt-20">
//       <p>
//         © {new Date().getFullYear()} Expressmaids | Developed by Afriwex Group
//       </p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-20">
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} Expressmaids{" "}
        <span className="mx-2 text-white font-bold relative -top-[1px]">•</span>
        Developed by CodeWithRendani{" "}
        <span className="mx-2 text-white font-bold relative -top-[1px]">•</span>
        <a
          href="https://www.afriwexgroup.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-red-400 transition"
        >
          Afriwex Group
        </a>
      </p>
    </footer>
  );
}