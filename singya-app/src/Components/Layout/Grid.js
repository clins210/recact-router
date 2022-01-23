import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props=>props.justify};
  align-items: ${props=>props.align};
`;
export default Grid;
//center flex-start flex-end space-between space-around