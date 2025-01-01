import { JSX } from "react";

export type AnimalGender = "betina" | "jantan";

interface iconModel{
    gender: AnimalGender;
    icon: JSX.Element;
}