import OverViewContent from "../../components/organisms/OverViewContent";
import SideBar from "../../components/organisms/SideBar";
import { jwtPayloadTypes, userTypes } from "../../services/dataTypes";
import jwtDecode from "jwt-decode";
import Head from "next/head";

export default function MemberOverview() {
  return (
    <section className="overview overflow-auto">
      <Head>
        <title>Store GG</title>
      </Head>
      <SideBar activeMenu="overview" />
      <OverViewContent />
    </section>
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
