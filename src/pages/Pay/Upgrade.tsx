import PaymentGrade from "./PaymentGrade";

const Upgrade = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-200">
      <div className=" min-h-[500px] rounded-md  sm:col-span-3 lg:col-span-1">
        <PaymentGrade
          butName="Premium"
          title="Subscribe to Premium"
          target={[
            "₦4,000 Naira per Month",
            "Add unlimited team members",
            "Add unlimited Projects",
            "Add unlimited Task to a project",
            "Assign task to team member",
            "Track Projects progress",
            "Get team members work report",
            "Get up-to-date report",
            "And many more",
          ]}
        />
      </div>

      <PaymentGrade
        title="Subscribe to Bromium"
        butName="Bromium"
        target={[
          "₦1,000 Naira per Month",
          "Add 6 team members",
          "Add 15 Projects",
          "Track Projects progress",
          "Add unlimited Task to a project",
          "Assign task to team member",
          "Get team members work report",
          "Get up-to-date report",
          "And many more",
        ]}
      />

      <PaymentGrade
        title="Subscribe to Freemium"
        butName="Freemium"
        target={[
          "Free Forever",
          "Add 3 team members",
          "Add 7 Projects",
          "Track Projects progress",
          "Add 10 Task to a project",
          "Get team members work report",
          "Get up-to-date report",
          "And many more",
        ]}
      />
    </div>
  );
};

export default Upgrade;
