import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 32px;
`;