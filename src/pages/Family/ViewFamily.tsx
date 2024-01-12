import LittleHeader from "../../components/layout/LittleHeader";
import { useUser, useUserID, useViewMember } from "../../hooks/useUserID";
import FamilyProps from "./familyProps";

const ViewFamily = () => {
  document.title = "View Family";

  const { user: userID }: any = useUserID();
  const { user }: any = useUser(userID);

  const { myMember } = useViewMember(user?._id);
  return (
    <div>
      <LittleHeader name={document.title} />
      <div className="flex flex-wrap justify-center">
        {myMember?.map((props: any) => (
          <FamilyProps props={props} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ViewFamily;
