import Category from "./Category";
import TableRow from "./TableRow";

export default function OverViewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category spentAmount={1800000} icon="category-desktop.svg">
                Game <br /> Desktop
              </Category>
              <Category spentAmount={8460000} icon="category-mobile.svg">
                Game <br /> Mobile
              </Category>
              <Category spentAmount={10000000} icon="category-other.svg">
                Other <br /> Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  categoryName="Desktop"
                  gameName="Mobile Legends: Bang Bang"
                  goldAmount={200}
                  image="overview-1"
                  status="Pending"
                  price={200000}
                />
                <TableRow
                  categoryName="Desktop"
                  gameName="Call Of Duty"
                  goldAmount={100}
                  image="overview-2"
                  status="Success"
                  price={100000}
                />
                <TableRow
                  categoryName="Mobile"
                  gameName="Clash Of Clans"
                  goldAmount={550}
                  image="overview-3"
                  status="Failed"
                  price={100000}
                />
                <TableRow
                  categoryName="Mobile"
                  gameName="The Royal Game"
                  goldAmount={200}
                  image="overview-4"
                  status="Pending"
                  price={200000}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
