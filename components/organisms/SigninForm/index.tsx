import Link from "next/link";
import { useState } from "react";
import { setSignIn } from "../../../services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function SiginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      return toast.error("Email dan password harus diisi", {
        theme: "colored",
      });
    }
    const result = await setSignIn(data);
    if (result.error) {
      return toast.error(result.message, {
        theme: "colored",
      });
    }
    const token = result.data.token;
    console.log(token);
    const tokenBase64 = btoa(token);
    Cookies.set("_t", tokenBase64, { expires: 1 });
    router.push("/");
  };
  return (
    <>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/signup"
          role="button"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
