import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  isActive?: boolean;
  icon:
    | "overview"
    | "message"
    | "card"
    | "transaction"
    | "rewards"
    | "settings"
    | "logout";
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, isActive, icon, href = "/" } = props;

  const classMenu = cx({
    item: true,
    active: isActive,
    "mb-30": true,
  });
  return (
    <div className={classMenu}>
      <div className="me-3">
        <Image
          src={`/icon/ic-menu-${icon}.svg`}
          width={25}
          height={25}
          alt="Icon Menu"
        />
      </div>
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
