interface HeadTitleProps {
  headTitle: string;
}

export default function HeadTitleFooter(props: HeadTitleProps) {
  const { headTitle } = props;
  return (
    <p className="text-lg fw-semibold color-palette-1 mb-12">{headTitle}</p>
  );
}
