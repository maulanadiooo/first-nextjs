import Image from "next/image";
import cx from "classnames";

interface TableRowProps {
  gameName: string;
  categoryName: string;
  goldAmount: number;
  price: number;
  status: "Pending" | "Failed" | "Success";
  image: string;
}
export default function TableRow(props: TableRowProps) {
  const { gameName, categoryName, goldAmount, price, status, image } = props;
  const classStatus = cx({
    "float-start": true,
    "icon-status": true,
    pending: status == "Pending",
    success: status == "Success",
    failed: status == "Failed",
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt="Game Thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {gameName}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {categoryName}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{goldAmount} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
