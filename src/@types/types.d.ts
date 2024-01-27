// Global Styles
type GlobalStylesKeys =
  | "--primary-color"
  | "--secondary-color"
  | "--success-color"
  | "--warning-color"
  | "--error-color"
  | "--bg-color"
  | "--black"
  | "--light-grey"
  | "--white"
  | "--highlight"
  | "--shadow-color"
  | "--primary-ff"
  | "--secondary-ff"
  | "--code-ff"
  | "--title-fs"
  | "--subtitle-fs"
  | "--hOne-fs"
  | "--hTwo-fs"
  | "--hThree-fs"
  | "--button-fs"
  | "--label-fs"
  | "--body-fs"
  | "--bold-fw"
  | "--semi-bold-fw"
  | "--medium-fw"
  | "--light-fw"
  | "--curved"
  | "--circled";

// UI Sizes
type UISizes = "sm" | "md" | "lg";
type ExtendedUISizes = UISizes | "xs" | "xl" | "xxl" | "xxxl";

// Border Radius
type BorderRadius = "squared" | "rounded" | "circled";

// Input Types
type InputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string | number;
  label?: string;
  size?: ExtendedUISizes;
  borderRadius?: BorderRadius;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  hasError?: boolean;
  onChange?: (input: any) => any;
  onBlur?: (input: any) => any;
  onFocus?: (input: any) => any;
};
