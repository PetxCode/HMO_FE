import LittleHeader from "../../components/layout/LittleHeader";

const HistoryScreen = () => {
  document.title = "History Screen";
  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>
    </div>
  );
};

export default HistoryScreen;
