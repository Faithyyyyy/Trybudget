import { PercentageConversion } from "../Utils/PercentageConversion";

function Expressbar() {
  const convertToPercent = PercentageConversion(50, 60);
  return (
    <section className="bg-white  rounded py-10 px-10 w-full mt-10">
      <p className="font-light text-sm text-gray-400">Expenses so far</p>
      <div className="flex justify-between my-2">
        <p className="font-light text-md">2000</p>
        <p className="font-light text-md">4000</p>
      </div>
      <div className="w-full h-[10px] rounded-lg bg-[#ff7461] bg-opacity-10">
        <div
          className={`h-full rounded-lg bg-[#ff7461] expenseBar `}
          style={{ width: `${convertToPercent}%` }}
        ></div>
      </div>
      <p></p>
    </section>
  );
}

export default Expressbar;
("");
