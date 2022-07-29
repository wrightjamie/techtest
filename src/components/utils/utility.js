import styled from "styled-components";

export const UtilityContainer = styled.div`
  display: grid;

  ${(props) => (props.bleed ? "grid-column: 1/-1" : "")};

  grid-template-columns: 1fr min(100%, 50rem) 1fr;

  ${(props) =>
    props.background
      ? `background-image: url(${props.background}); background-size: cover;`
      : ""}

  > * {
    grid-column: 2;
  }
`;

export const LayoutContainer = styled(UtilityContainer)``;

export const UtilityFlex = styled.div`
  display: flex;
  gap: var(--gap);
  align-items: center;
`;

export const UtilityNavList = styled(UtilityFlex)`
  list-style: none;
`;
