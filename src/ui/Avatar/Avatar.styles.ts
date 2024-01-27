import styled from "styled-components";

const getAvatarContainerSize = (size: UISizes) => {
    switch (size) {
        case "sm":
            return "25px";
        case "lg":
            return "100px";
        case "md":
        default:
            return "50px";
    }
};

const getAvatarIconSize = (size: UISizes) => {
    switch (size) {
        case "sm":
            return "15px";
        case "lg":
            return "60px";
        case "md":
        default:
            return "40px";
    }
};

const getBorderRadius = (borderRadius: BorderRadius) => {
    switch (borderRadius) {
        case "rounded":
            return "4px";
        case "circled":
            return "50%";
        case "squared":
        default:
            return "0px";
    }
};

export const AvatarContainer = styled.div<{
    size: UISizes;
    borderRadius?: BorderRadius;
}>`
    width: ${prop => getAvatarContainerSize(prop.size)};
    height: ${prop => getAvatarContainerSize(prop.size)};
    border-radius: ${prop =>
        prop?.borderRadius && getBorderRadius(prop.borderRadius)};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--light-grey);
    background-color: var(--light-grey);
    box-shadow: 1px 1px 4px var(--shadow-color);
    padding: 2px;
    margin: 10px;

    .defaultAvatar {
        color: var(--shadow-color);
        width: ${prop => getAvatarIconSize(prop.size)};
        height: ${prop => getAvatarIconSize(prop.size)};
    }
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
