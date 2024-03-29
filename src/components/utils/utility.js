import styled, { css } from "styled-components";

export const UtilityContainer = styled.div`
  position: relative;
  display: grid;

  ${(props) => (props.bleed ? "grid-column: 1/-1" : "")};

  grid-template-columns: 1fr min(100%, var(--max-width)) 1fr;

  ${(props) =>
    props.background
      ? `background-image: url(${props.background}); background-size: cover;`
      : ""}

  ${(props) => (props.gridrow ? `grid-row: ${props.gridrow};` : "")}

  > * {
    grid-column: 2;
  }
`;

export const LayoutContainer = styled(UtilityContainer)``;

const flex = css`
  display: flex;
  gap: var(--gap);
  align-items: center;

  ${(props) => (props.jc ? `justify-content: center;` : "")}
`;

export const UtilityFlex = styled.div`
  ${flex}
`;

export const UtilityNavList = styled.ul`
  ${flex}
  list-style: none;
`;

export const flow = css`
  /*
  Andy Bell, flow
  */
  > * + * {
    margin-top: var(--flow-space);
  }
`;

export const VisHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;
