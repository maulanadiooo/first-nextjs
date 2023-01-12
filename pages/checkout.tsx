import Image from "next/image";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import jwtDecode from "jwt-decode";
import { jwtPayloadTypes, userTypes } from "../services/dataTypes";

interface CheckoutProps {
  user: userTypes;
}

export default function Checkout(props: CheckoutProps) {
  const { user } = props;

  return (
    <>
      <Navbar />
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
      <Footer />
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      _t: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { _t } = req.cookies;
  if (!_t) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(_t, "base64").toString("ascii");

  const payload: jwtPayloadTypes = jwtDecode(jwtToken);
  const userPayload: userTypes = payload.player;
  return {
    props: {
      user: userPayload,
    },
  };
}
