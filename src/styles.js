import styled from "styled-components";

export const SolarSystemBase = styled.div`
  background: #061626;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const SpaceObject = styled.div`
  margin: 10px;
`;

export const Sun = styled(SpaceObject)`
  background: #fce497;
  border-radius: 9999px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const Planet = styled(SpaceObject)`
  border-radius: 9999px;
`;

export const Earth = styled(Planet)`
  background: #94c3e1;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
