import cx from "classnames";

interface ButtonTabProps {
  title: string;
  isActive?: boolean;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, isActive = false } = props;
  const classButton = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": isActive,
  });
  return (
    <a data-filter="*" href="#" className={classButton}>
      {title}
    </a>
  );
}
