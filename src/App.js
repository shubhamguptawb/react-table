import "./styles.css";
import { data } from "../data";
export default function App() {
  return (
    <div className="h-screen w-screen overflow-y-scroll mt-8  flex justify-center">
      <div className="table-container  ">
        <table className="mx-56 text-[#696C71] h-max">
          <thead>
            <tr>
              <th>Frontier ID</th>
              <th>Manufacturer ID</th>
              <th>Category</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row, index) => {
                return (
                  <tr className="text-[14px]">
                    <td>{row.InventoryID}</td>
                    <td>{row.manufacturer_code}</td>
                    <td>{row.category}</td>
                    <td>{row.item_name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
