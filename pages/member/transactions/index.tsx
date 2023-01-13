import SideBar from "../../../components/organisms/SideBar";
import Transactioncontent from "../../../components/organisms/TransactionContent";
import Head from "next/head";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <Head>
        <title>Store GG</title>
      </Head>
      <SideBar activeMenu="transactions" />
      <Transactioncontent />
    </section>
  );
}
