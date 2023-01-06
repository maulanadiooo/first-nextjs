interface ReachItemProps {
  head: String;
  bottom: String;
}

export default function ReachItem(props: ReachItemProps) {
  const { head, bottom } = props;
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {head}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {bottom}
      </p>
    </div>
  );
}
