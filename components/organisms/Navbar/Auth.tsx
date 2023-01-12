import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { jwtPayloadTypes, userTypes } from "../../../services/dataTypes";
import { useRouter } from "next/router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("_t") ?? "";
    if (token) {
      const jwtToken = atob(token);
      const payload: jwtPayloadTypes = jwtDecode(jwtToken);
      const userPayload: userTypes = payload.player;
      setIsLogin(true);
      setUser(userPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("_t");
    router.push("/");
    setIsLogin(false);
  };
  if (isLogin) {
    return (
      <>
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <a
              className="dropdown-toggle ms-lg-40"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE}/${user.avatar}`}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>

            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link
                  className="dropdown-item text-lg color-palette-2"
                  href="#"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-lg color-palette-2"
                  href="#"
                >
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-lg color-palette-2"
                  href="#"
                >
                  Account Settings
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-lg color-palette-2"
                  href="#"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="nav-item my-auto btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          onClick={onLogout}
        >
          Logout
        </li>
      </>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link
        href="/signin"
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
}
