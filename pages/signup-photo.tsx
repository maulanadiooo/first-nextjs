import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getGameCategory } from "../services/player";
import { CategoryTypes } from "../services/dataTypes";
import { setSignUp } from "../services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function SignupPhoto() {
  const [gameCategory, setGameCategory] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [localFormState, setLocalformState] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();

  const getGameCategoryApi = useCallback(async () => {
    const data = await getGameCategory();
    setGameCategory(data);
    setFavorite(data[0]?._id ?? "");
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryApi();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalformState(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);

    const data = new FormData();
    data.append("image", image!);
    data.append("favorite", favorite);
    data.append("name", form.name);
    data.append("username", form.name);
    data.append("password", form.password);
    data.append("email", form.email);
    data.append("phoneNumber", "08121111");

    const result = await setSignUp(data);
    if (result.error) {
      return toast.error(result.message, {
        theme: "colored",
      });
    } else {
      toast.success("Register Berhasil", {
        theme: "colored",
      });
      localStorage.removeItem("user-form");
      router.push("/signup-success");
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <div className="form-input d-md-block d-flex flex-column">
          <div>
            <div className="mb-20">
              <div className="image-upload text-center">
                <label htmlFor="avatar">
                  <Image
                    src={imagePreview ?? "/icon/upload.svg"}
                    className="img-upload"
                    width={120}
                    height={120}
                    alt="Upload Icon"
                  />
                </label>
                <input
                  id="avatar"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    const imgF = event.target.files[0];
                    setImagePreview(URL.createObjectURL(imgF));
                    return setImage(imgF);
                  }}
                />
              </div>
            </div>
            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
              {localFormState.name}
            </h2>
            <p className="text-lg text-center color-palette-1 m-0">
              {localFormState.email}
            </p>
            <div className="pt-50 pb-50">
              <label
                htmlFor="category"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Favorite Game
              </label>
              <select
                id="category"
                name="category"
                className="form-select d-block w-100 rounded-pill text-lg"
                aria-label="Favorite Game"
                value={favorite}
                onChange={(event) => setFavorite(event.target.value)}
              >
                {gameCategory.map((category: CategoryTypes) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="button-group d-flex flex-column mx-auto">
            <button
              className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
              role="button"
              onClick={onSubmit}
            >
              Create My Account
            </button>
            <a
              className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
              href="#"
              role="button"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
