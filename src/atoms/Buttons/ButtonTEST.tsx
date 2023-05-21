import PropTypes from "prop-types";

const shapes: string = {
  RoundedBorder8: "rounded-lg",
  RoundedBorder12: "rounded-[12px]",
  RoundedBorder18: "rounded-[18px]",
  icbRoundedBorder10: "rounded-[10px]",
  icbCircleBorder24: "rounded-[24px]",
};
const variants = {
  FillGray90001: "bg-gray_900_01",
  FillLightgreen200: "bg-light_green_200 text-gray_900_02",
  OutlineWhiteA70014:
    "bg-gradient1  border-solid border-t border-white_A700_14 text-blue_gray_100",
  OutlineBlack900:
    "bg-gray_900_01 outline outline-[3px] outline-black_900 text-gray_600",
  FillGray600: "bg-gray_600",
  OutlineLightgreen200:
    "border-[3px] border-light_green_200 border-solid text-light_green_200",
  Outline: "bg-gradient1  border-solid border-t shadow-bs4",
  FillLightgreen20001: "bg-light_green_200_01 text-gray_900_02",
  OutlineLightgreen20001:
    "border-[3px] border-light_green_200_01 border-solid text-light_green_200_01",
  FillGray800: "bg-gray_800",
  FillLightgreen100: "bg-light_green_100 text-gray_900_02",
  OutlineLightgreen100:
    "border-[3px] border-light_green_100 border-solid text-light_green_100",
  FillGray200: "bg-gray_200 text-gray_900",
  FillBluegray100: "bg-blue_gray_100 text-gray_900",
  FillGray500: "bg-gray_500 text-gray_900",
  FillGray900: "bg-gray_900 text-blue_gray_100",
  OutlineGray90001:
    "bg-black_900 border border-gray_900_01 border-solid text-blue_gray_100",
  FillBlack90001: "bg-black_900_01 text-blue_gray_100",
  FillIndigo50: "bg-indigo_50 text-gray_900_02",
  FillBlue100: "bg-blue_100 text-gray_900_02",
  FillIndigo200: "bg-indigo_200 text-gray_900_02",
  FillIndigo300: "bg-indigo_300 text-gray_900_02",
  FillIndigoA200: "bg-indigo_A200 text-blue_100",
  FillIndigo500: "bg-indigo_500 text-blue_100",
  FillIndigo800: "bg-indigo_800 text-blue_100",
  FillIndigo900: "bg-indigo_900 text-blue_100",
  FillGray90002: "bg-gray_900_02 text-blue_100",
  FillDeeppurple50: "bg-deep_purple_50 text-gray_900_03",
  FillDeeppurple100: "bg-deep_purple_100 text-gray_900_03",
  FillDeeppurpleA100: "bg-deep_purple_A100 text-gray_900_03",
  FillDeeppurpleA10001: "bg-deep_purple_A100_01 text-gray_900_03",
  FillDeeppurpleA200: "bg-deep_purple_A200 text-deep_purple_100",
  FillDeeppurpleA70001: "bg-deep_purple_A700_01 text-deep_purple_100",
  FillGray5001: "bg-gray_50_01 text-blue_gray_900",
  FillLightblue50: "bg-light_blue_50 text-blue_gray_900",
  FillLightblue100: "bg-light_blue_100 text-blue_gray_900",
  FillLightblue10001: "bg-light_blue_100_01 text-blue_gray_900",
  FillLightblue200: "bg-light_blue_200 text-blue_gray_900",
  FillBlue300: "bg-blue_300 text-blue_gray_900",
  FillBluegray500: "bg-blue_gray_500 text-light_blue_50",
  FillBluegray700: "bg-blue_gray_700 text-light_blue_50",
  FillBluegray900: "bg-blue_gray_900 text-light_blue_50",
  FillRed50: "bg-red_50 text-gray_900_06",
  FillYellow900: "bg-yellow_900 text-red_50",
  FillGray90006: "bg-gray_900_06 text-red_50",
  FillGray100: "bg-gray_100 text-gray_900_07",
  FillGreen400: "bg-green_400 text-gray_100",
  FillGray90007: "bg-gray_900_07 text-gray_100",
  FillRed5001: "bg-red_50_01 text-gray_900_08",
  FillRed700: "bg-red_700 text-red_50_01",
  FillGray90008: "bg-gray_900_08 text-red_50_01",
  OutlineWhiteA70014_1:
    "bg-gradient1  border border-solid border-white_A700_14 shadow-bs10",
  OutlineWhiteA70014_2:
    "bg-gradient1  border border-solid border-white_A700_14",
  OutlineBlack900_1: "bg-gray_900_01 outline outline-[4px] outline-black_900",
  icbOutlineWhiteA70014:
    "bg-gradient1  border-solid border-t border-white_A700_14 shadow-bs1",
  icbOutlineWhiteA70014_1:
    "bg-gradient1  border-solid border-t border-white_A700_14 shadow-bs7",
  icbOutlineWhiteA70014_2:
    "bg-gradient1  border-solid border-t border-white_A700_14 shadow-bs6",
  icbOutlineWhiteA70014_3:
    "bg-gradient1  border-solid border-t border-white_A700_14 shadow-bs9",
  icbFillGray90001: "bg-gray_900_01",
  icbOutline: "bg-gradient1  border-solid border-t shadow-bs4",
  icbFillLightgreen200: "bg-light_green_200",
  icbOutlineLightgreen200: "border-[3px] border-light_green_200 border-solid",
  icbFillLightgreen20001: "bg-light_green_200_01",
  icbOutlineLightgreen20001:
    "border-[3px] border-light_green_200_01 border-solid",
  icbFillGray800: "bg-gray_800",
  icbFillLightgreen100: "bg-light_green_100",
  icbOutlineLightgreen100: "border-[3px] border-light_green_100 border-solid",
  icbFillGray600: "bg-gray_600",
};
const sizes = {
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-4",
  xl: "p-[26px] sm:px-5",
  smIcn: "p-1",
  mdIcn: "p-2.5",
  lgIcn: "p-3.5",
};

const ButtonTEST = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder12",
    "RoundedBorder18",
    "icbRoundedBorder10",
    "icbCircleBorder24",
  ]),
  variant: PropTypes.oneOf([
    "FillGray90001",
    "FillLightgreen200",
    "OutlineWhiteA70014",
    "OutlineBlack900",
    "FillGray600",
    "OutlineLightgreen200",
    "Outline",
    "FillLightgreen20001",
    "OutlineLightgreen20001",
    "FillGray800",
    "FillLightgreen100",
    "OutlineLightgreen100",
    "FillGray200",
    "FillBluegray100",
    "FillGray500",
    "FillGray900",
    "OutlineGray90001",
    "FillBlack90001",
    "FillIndigo50",
    "FillBlue100",
    "FillIndigo200",
    "FillIndigo300",
    "FillIndigoA200",
    "FillIndigo500",
    "FillIndigo800",
    "FillIndigo900",
    "FillGray90002",
    "FillDeeppurple50",
    "FillDeeppurple100",
    "FillDeeppurpleA100",
    "FillDeeppurpleA10001",
    "FillDeeppurpleA200",
    "FillDeeppurpleA70001",
    "FillGray5001",
    "FillLightblue50",
    "FillLightblue100",
    "FillLightblue10001",
    "FillLightblue200",
    "FillBlue300",
    "FillBluegray500",
    "FillBluegray700",
    "FillBluegray900",
    "FillRed50",
    "FillYellow900",
    "FillGray90006",
    "FillGray100",
    "FillGreen400",
    "FillGray90007",
    "FillRed5001",
    "FillRed700",
    "FillGray90008",
    "OutlineWhiteA70014_1",
    "OutlineWhiteA70014_2",
    "OutlineBlack900_1",
    "icbOutlineWhiteA70014",
    "icbOutlineWhiteA70014_1",
    "icbOutlineWhiteA70014_2",
    "icbOutlineWhiteA70014_3",
    "icbFillGray90001",
    "icbOutline",
    "icbFillLightgreen200",
    "icbOutlineLightgreen200",
    "icbFillLightgreen20001",
    "icbOutlineLightgreen20001",
    "icbFillGray800",
    "icbFillLightgreen100",
    "icbOutlineLightgreen100",
    "icbFillGray600",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
