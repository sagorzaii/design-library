import React from "react";
import * as S from "./Avatar.styles";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface AvatarProps {
    size: UISizes;
    borderRadius?: BorderRadius;
    source?: string;
}

const Avatar = ({ size, borderRadius, source }: AvatarProps) => (
    <S.AvatarContainer size={size} borderRadius={borderRadius}>
        {source ? (
            <S.AvatarImage src={source} />
        ) : (
            <FontAwesomeIcon icon={faUser} className="defaultAvatar" />
        )}
    </S.AvatarContainer>
);

export default Avatar;
