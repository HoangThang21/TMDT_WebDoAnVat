import styled from "styled-components";
import StarOutlineIcon from "./icons/StarOutlineIcon";
import { useState } from "react";
import StarSolidIcon from "./icons/StarSolidIcon";
import { primary } from "@/lib/colors";

const StarsWrapper = styled.div`
  display: inline-flex;
  gap: 1px;

  align-items: center;
`;
const StarWrapper = styled.button`
  ${(props) =>
    props.size === "md" &&
    `
 height: 1.4rem;
  width: 1.4rem;
`}
  ${(props) =>
    props.size === "sm" &&
    `
 height: 1rem;
  width: 1rem;
`}
${(props) =>
    !props.disabled === "sm" &&
    `
  cursor: pointer;
`}
 
 
  padding: 0;
  border: 0;
  display: inline-block;
  background-color: transparent;
  color: ${primary};
`;

export default function StartRating({
  defaultHowmany = 0,
  size = "md",
  disabled,
  onChange = () => {}
}) {
  const [howMany, setHowMany] = useState(defaultHowmany);
  const five = [1, 2, 3, 4, 5];
  function handleStarClick(n) {
    if (disabled) {
      return;
    }
    setHowMany(n);
    onChange(n);
  }
  return (
    <StarsWrapper>
      {five.map((n) => (
        <StarWrapper
          disabled={disabled}
          size={size}
          onClick={() => handleStarClick(n)}
        >
          {howMany >= n ? (
            <StarSolidIcon></StarSolidIcon>
          ) : (
            <StarOutlineIcon></StarOutlineIcon>
          )}
        </StarWrapper>
      ))}
    </StarsWrapper>
  );
}
