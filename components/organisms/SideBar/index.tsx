import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "rewards"
    | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" isActive={activeMenu === 'overview'} icon="overview" href="/member"/>
          <MenuItem
            title="Transactions"
            isActive={activeMenu === 'transactions'}
            icon="transaction"
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="message" />
          <MenuItem title="Card" icon="card" />
          <MenuItem title="Rewards" icon="rewards" />
          <MenuItem title="Settings" icon="settings" href="/member/edit" isActive={activeMenu === 'settings'}/>
          <MenuItem title="Logout" icon="logout" href="/signin" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
