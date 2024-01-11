import LittleHeader from "../../components/layout/LittleHeader";

const Appoinments = () => {
  document.title = "Appoinments Screen";
  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>
    </div>
  );
};

export default Appoinments;
