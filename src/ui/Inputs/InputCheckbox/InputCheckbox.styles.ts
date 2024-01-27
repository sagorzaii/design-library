import styled from "styled-components";
import { Label as SharedLabel } from "../SharedInput.styles";

export const InputCheckbox = styled.input`
  margin: 0px 10px 0px 0px;
  accent-color: var(--primary-color);
`;

export const Label = styled(SharedLabel)`
  user-select: none;
`;
