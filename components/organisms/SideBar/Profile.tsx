import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { jwtPayloadTypes, userTypes } from "../../../services/dataTypes";
import Image from "next/image";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("_t");
    const jwtToken = atob(token!);
    const payloadUser: jwtPayloadTypes = jwtDecode(jwtToken);
    const userPayload: userTypes = payloadUser.player;
    setUser(userPayload);
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE}/${user.avatar}`}
        width={90}
        height={90}
        style={{ borderRadius: "100%" }}
        alt="Profile"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
