import { getUserAPI, userCookieAPI } from "../api/userAPI";
import { viewMember, viewMemberDetail } from "../api/memberAPI";
import useSWR from "swr";

export const useUser = (readID: string) => {
  const { data: user } = useSWR(`/read-user/${readID}`, () => {
    return getUserAPI(readID).then((res) => {
      return res.data;
    });
  });

  return { user };
};

export const useOtherUser = (userID: string) => {
  const { data: otherUser } = useSWR(`/view-member-detail/${userID}`, () => {
    return viewMemberDetail(userID).then((res) => {
      return res.data;
    });
  });

  return { otherUser };
};

export const useUserID = () => {
  const { data: user } = useSWR(`/reading-user-cookie`, () => {
    return userCookieAPI().then((res) => {
      return res.data;
    });
  });

  return { user };
};

export const useViewMember = (userID: string) => {
  const { data: myMember } = useSWR(
    `view-member/${userID}`,
    () => {
      return viewMember(userID).then((res: any) => {
        return res.data.members;
      });
    },
    { refreshInterval: 3000 }
  );

  return { myMember };
};
