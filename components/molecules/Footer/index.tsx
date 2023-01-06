import Link from "next/link";

interface FooterItemListProps {
  title: string;
}

export default function FooterListItem(props: FooterItemListProps) {
  const { title } = props;
  return (
    <li className="mb-6">
      <Link href="" className="text-lg color-palette-1 text-decoration-none">
        {title}
      </Link>
    </li>
  );
}
