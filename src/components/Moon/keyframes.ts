const SUNLIGHT = "#fff"; // $sunlight의 실제 색상값을 입력하세요.
const SHADOW = "#000"; // $shadow의 실제 색상값을 입력하세요.

export const KEYFRAMES = [
  {
    offset: 0,
    transform: "rotate(-10deg)",
    backgroundColor: SHADOW,
    borderLeft: "0 solid " + SUNLIGHT,
    borderRight: "10rem solid " + SHADOW,
  },
  {
    offset: 0.249999,
    backgroundColor: SHADOW,
  },
  {
    offset: 0.25,
    transform: "rotate(0deg)",
    backgroundColor: SUNLIGHT,
    borderLeft: "10rem solid " + SUNLIGHT,
    borderRight: "10rem solid " + SHADOW,
  },
  {
    offset: 0.5,
    transform: "rotate(0deg)",
    backgroundColor: SUNLIGHT,
    borderLeft: "0 solid " + SUNLIGHT,
    borderRight: "0 solid " + SHADOW,
  },
  {
    offset: 0.50001,
    borderLeft: "0 solid " + SHADOW,
  },
  {
    offset: 0.749999,
    backgroundColor: SUNLIGHT,
    borderRight: "0 solid " + SUNLIGHT,
  },
  {
    offset: 0.75,
    transform: "rotate(0deg)",
    backgroundColor: SHADOW,
    borderLeft: "10rem solid " + SHADOW,
    borderRight: "10rem solid " + SUNLIGHT,
  },
  {
    offset: 1,
    transform: "rotate(10deg)",
    backgroundColor: SHADOW,
    borderLeft: "10rem solid " + SHADOW,
    borderRight: "0 solid " + SUNLIGHT,
  },
];
