import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  >div {
    display: flex;
    align-items: center;
    width: 100%;
  }

  >div:first-child {
    justify-content: flex-start;
  }

  >div:nth-child(2) {
    justify-content: center;
  }

  >div:last-child {
    justify-content: flex-end;
  }
`;
