import { useMemo } from "react";
import { therapists } from "../types/therapists";

export const useTherapists = (onlyAvailable = false) => {
  const filteredTherapists = useMemo(() => {
    if (!onlyAvailable) return therapists;

    return therapists.filter((therapist) => therapist.isAvailable);
  }, [onlyAvailable]);

  return { therapists: filteredTherapists };
};
