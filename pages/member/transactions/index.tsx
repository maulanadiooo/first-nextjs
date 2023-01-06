import SideBar from "../../../components/organisms/SideBar";
import Transactioncontent from "../../../components/organisms/TransactionContent";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <Transactioncontent />
    </section>
  );
}
