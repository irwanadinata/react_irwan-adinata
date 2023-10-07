import { useToken } from "@/utils/states/contexts/token-context";
import { Link } from "react-router-dom";

import Swal from "@/utils/swal";

export default function Navbar() {
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    Swal.fire({
      title: "Success",
      text: "Logout Successfully",
      showCancelButton: false,
    });
  }

  return (
    <nav className="w-full h-12 grid grid-cols-2 content-center px-4 bg-blue-500 text-white">
      <Link to="/">Home</Link>
      <div className="flex gap-4 items-center justify-end">
        {token === "" ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/products">Products</Link>
            <p className="cursor-pointer" onClick={() => handleLogout()}>
              Logout
            </p>
          </>
        )}
      </div>
    </nav>
  );
}
