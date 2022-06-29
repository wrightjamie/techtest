import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min(80%, 43.75rem) 1fr;
  > * {
    grid-column: 2;
  }
`;
