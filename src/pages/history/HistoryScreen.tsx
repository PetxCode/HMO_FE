import LittleHeader from "../../components/layout/LittleHeader";

const HistoryScreen = () => {
  document.title = "History Screen";

  const data = Array.from({ length: 5 });
  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>

      <div className="py-6 px-2 border rounded-md w-[100%] overflow-y-hidden ">
        {/* header */}
        <div className="text-[gray] w-[950px] flex items-center gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[60px] border-r">Date</div>
          <div className="w-[200px] border-r">Hospital Name</div>
          <div className="w-[300px] border-r">Contact Address</div>
          <div className="w-[100px] border-r">Approved</div>
          <div className="w-[140px] border-r">Scheduled Date</div>
          <div className="w-[100px] border-r">Received</div>
        </div>
        <div className=" w-full">
          {data?.map((props: any, i: number) => (
            <div
              key={i}
              className={`w-[950px] flex items-center gap-2 text-[12px] font-medium  h-14 px-4 ${
                i % 2 === 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <div className="w-[60px] border-r">Date</div>
              <div className="w-[200px] border-r">Hospital Name</div>
              <div className="w-[300px] border-r">Contact Address</div>
              <div className="w-[100px] border-r">Approved</div>
              <div className="w-[140px] border-r">Scheduled Date</div>
              <div className="w-[100px] border-r">Received</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryScreen;
