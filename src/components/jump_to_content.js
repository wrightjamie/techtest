import styled from "styled-components";

const JumpToContent = styled.a`
  position: fixed;
  padding: var(--gap);
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  z-index: 100;
  top: 0;
  font-size: var(--f-s-600);
  font-weight: var(--f-w-500);
  background-color: var(--col-light);
  color: var(--red);
  border-radius: 0 0 5px 5px;
  transition: transform 0.3s, outline-offset 0.5s, outline-color 0.5s;
  outline-offset: 0px;
  &:focus {
    transform: translateX(-50%) translateY(0%);
    outline-offset: 5px;
  }
`;

export default JumpToContent;
