import React from "react";
import {
    ButtonTitle,
    HOne,
    HThree,
    HTwo,
    MainTitle,
    SubTitle,
} from "./Title.styles";

export interface TitleProps {
    label: string;
    type: "main" | "sub" | "h1" | "h2" | "h3" | "button";
    align?: "left" | "center" | "right";
}

const Title = (props: TitleProps) => {
    const { label, type, align = "left" } = props;

    const TitleFinder = () => {
        switch (type) {
            case "main":
            default:
                return <MainTitle align={align}>{label}</MainTitle>;
            case "sub":
                return <SubTitle align={align}>{label}</SubTitle>;
            case "h1":
                return <HOne align={align}>{label}</HOne>;
            case "h2":
                return <HTwo align={align}>{label}</HTwo>;
            case "h3":
                return <HThree align={align}>{label}</HThree>;
            case "button":
                return <ButtonTitle align={align}>{label}</ButtonTitle>;
        }
    };

    return TitleFinder();
};

export default Title;
