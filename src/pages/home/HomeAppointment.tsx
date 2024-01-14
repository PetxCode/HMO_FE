import moment from "moment";
import { useUserID } from "../../hooks/useUserID";
import { useUserHospitalAppointment } from "../../hooks/useHospital";

const HomeAppointment = () => {
  const { user } = useUserID();
  const { data } = useUserHospitalAppointment(user);

  return (
    <div className="py-6 px-2 border rounded-md w-[100%] overflow-y-hidden ">
      {/* header */}
      <div className="text-[gray] w-[1280px] flex items-center gap-2 text-[12px] font-medium uppercase mb-10 px-4">
        <div className="w-[130px] border-r">Date</div>
        <div className="w-[200px] border-r">Hospital Name</div>
        <div className="w-[300px] border-r">Contact Address</div>
        <div className="w-[100px] border-r">Approved</div>
        <div className="w-[180px] border-r">Scheduled Date</div>
        <div className="w-[100px] border-r">Time</div>
        <div className="w-[100px] border-r">Received</div>
        <div className="w-[300px] border-r">Reasons</div>
      </div>
      <div className="w-full">
        {data?.appointments?.map((props: any, i: number) => (
          <div>
            {i < 5 && (
              <div
                key={props}
                className={`w-[1280px] flex items-center gap-2 text-[12px] font-medium  h-14 px-4 ${
                  i % 2 === 0 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <div className="w-[130px] border-r">
                  {moment(props.createdAt).format("ll")}
                </div>
                <div className="w-[200px] border-r">{props.hospitalName}</div>
                <div className="w-[300px] border-r">
                  {props.location ? props.location : "undisclosed"}
                </div>
                <div className="w-[100px] border-r">
                  {props.approved ? "Approved" : "No yet Approve"}
                </div>
                <div className="w-[180px] border-r gap-1 ">
                  <p>{props.appointmentDate.split(",")[0]},</p>

                  <p>{props.appointmentDate.split(",")[1]}</p>
                  {/* <span>
                  {props.appointmentDate.split(",")[2]?.split(" ")[1]}
                </span> */}
                </div>
                <div className="w-[100px] border-r">
                  <span>
                    {props.appointmentDate.split(",")[2]?.split(" ")[2]}
                    {props.appointmentDate.split(",")[2]?.split(" ")[3]}
                  </span>
                </div>
                <div className="w-[100px] border-r">Not yet Received</div>
                <div className="w-[300px] border-r ">
                  {props?.reason.substring(0, 80)}...
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAppointment;
