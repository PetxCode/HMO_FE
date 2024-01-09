import { MdCheck } from "react-icons/md";
import Button from "../../components/reUse/Button";
import { FC } from "react";

interface iProps {
  target: string[];
  title: string;
  butName: string;
}

const PaymentGrade: FC<iProps> = ({ target, title, butName }) => {
  return (
    <div>
      <div className="border min-h-[500px] rounded-md flex flex-col pb-5">
        <div className="my-10">
          <center className=" text-[25px] font-medium capitalize leading-tight mb-8">
            {title}
          </center>

          <div
            className={`flex flex-col [&>*:nth-child(1)]:font-bold [&>*:nth-child(1)]:text-[20px] [&>*:nth-child(1)]:text-purple-800 `}
          >
            {target?.map((el, i: number) => (
              <div
                key={i}
                className="mx-2 flex items-center my-3 font-medium text-[15px]"
              >
                <div className="mr-3 flex justify-center items-center h-5 w-5 rounded-full bg-purple-800 shadow-md text-white">
                  <MdCheck />
                </div>

                <div className="leading-tight w-[80%] ">{el}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1" />
        <div className="w-full flex justify-center">
          <Button name={butName} className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default PaymentGrade;
