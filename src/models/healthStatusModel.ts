import { JSX } from "react";

type StatusType = "sehat" | "tidakSehat";

interface StatusModel {
  status: StatusType;
  icon: JSX.Element;
}
