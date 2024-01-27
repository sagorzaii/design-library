import styled from "styled-components";

interface TitleCSSProps {
    align: "left" | "center" | "right";
}

export const Wrapper = styled.header<TitleCSSProps>`
    width: 100%;
    max-width: 90%;
    margin: auto;
    padding: 0 5px;
    text-align: left;
    color: var(--black);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: var(--primary-ff);

    text-align: ${props => props.align === "center" && "center"};
    text-align: ${props => props.align === "right" && "right"};
`;

export const MainTitle = styled(Wrapper)`
    font-family: var(--secondary-ff);
    font-weight: var(--bold-fw);
    font-size: var(--title-fs);
    text-transform: uppercase;
`;

export const SubTitle = styled(Wrapper)`
    font-family: var(--secondary-ff);
    font-weight: var(--semi-bold-fw);
    font-size: var(--subtitle-fs);
    text-transform: uppercase;
`;

export const HOne = styled(Wrapper)`
    font-weight: var(--bold-fw);
    font-size: var(--hOne-fs);
`;

export const HTwo = styled(Wrapper)`
    font-weight: var(--semi-bold-fw);
    font-size: var(--hTwo-fs);
`;

export const HThree = styled(Wrapper)`
    font-weight: var(--medium-fw);
    font-size: var(--hThree-fs);
`;

export const ButtonTitle = styled(Wrapper)`
    font-weight: var(--bold-fw);
    font-size: var(--button-fs);
    text-transform: uppercase;
`;
