import { useDispatch } from "react-redux";

export const useTransitionalChange = (action: any) => {
  const dispatch = useDispatch();
  if (!document.startViewTransition) {
    dispatch(action());
  } else {
    document.startViewTransition(() => {
      dispatch(action());
    });
  }
};
