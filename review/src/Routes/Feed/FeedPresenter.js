import React from "react"; 
import styled from "styled-components"; 
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default ({ data, loading }) => {
    return (
        <Wrapper>
            { loading && <Loader />}
        </Wrapper>
    )
}