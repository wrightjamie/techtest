import styled from "styled-components";

export const UtilityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr min(100%, 50rem) 1fr;
  > * {
    grid-column: 2;
  }
`;

export const LayoutContainer = styled(UtilityContainer)`
  background: blue;
`;

export const UtilityFlex = styled.div`
  display: flex;
  gap: var(--gap);
  align-items: center;
`;

export const UtilityNavList = styled(UtilityFlex)`
  list-style: none;
`;
