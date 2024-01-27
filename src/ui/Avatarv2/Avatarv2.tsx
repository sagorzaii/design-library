import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as S from "./Avatarv2.styles";

export interface AvatarProps {
  size: UISizes;
  borderRadius?: BorderRadius;
  source?: string;
  fallbackName?: string;
  imgAlt?: string;
}

const Avatarv2 = ({
  size,
  borderRadius = "circled",
  source,
  fallbackName,
  imgAlt,
}: AvatarProps) => {
  const getFallbackNameInitial = () => {
    if (fallbackName) {
      const nameArray = fallbackName.split(" ");
      return nameArray
        .map((name) => name.charAt(0))
        .slice(0, 2)
        .join("");
    }
    return "";
  };

  return (
    <S.AvatarRoot size={size} borderRadius={borderRadius}>
      {source ? (
        <S.AvatarImage src={source} alt={imgAlt} />
      ) : (
        <S.AvatarFallback size={size} borderRadius={borderRadius}>
          {fallbackName ? (
            getFallbackNameInitial()
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}
        </S.AvatarFallback>
      )}
    </S.AvatarRoot>
  );
};

export default Avatarv2;
