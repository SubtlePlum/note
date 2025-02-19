## eclipsLoadingSpinner

```typescript
import styled from "styled-components";

export const EclipsLoadingSpinner = () => {
  return (
    <LoadingSpinner>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingSpinner>
  );
};

const LoadingSpinner = styled.div`
  position: fixed;
  top: 46%;
  left: 47%;

  @media only all and (max-width: 767px) {
    top: 45%;
    left: 44%;
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: gold;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
```

## CircleLoadingSpinner

```typescript
import styled, { keyframes } from "styled-components";

export const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <LoadingIcon />
      <LoadingMsg>Loading...</LoadingMsg>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  } 75% {
    opacity:1;
  } 100% {
    transform: rotate(360deg);
    opacity:0;
  }
`;

const LoadingIcon = styled.div`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border: 4px solid #fff;
  border-top-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 2s;
`;

const msgAnimation = keyframes`
  75% {
    opacity:1;
  } 100% {
    opacity:0;
  }
`;
const LoadingMsg = styled.div`
  font-weight: bold;
  color: white;
  animation: ${msgAnimation} 2s;
`;
```

## Normal LopadingSpinner

```typescript
import styled from "styled-components";

export const LoadingSpinner = () => {
  return (
    <Spinner>
      <div className="spinner"></div>
    </Spinner>
  );
};

const Spinner = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  & .spinner {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 3px solid transparent;
    /* border-color: #3b3b3b #747474 #747474 #3b3b3b; */
    border-color: ${(props) => props.theme.loadingColor};
    animation: spinner 0.2s infinite;
  }
`;
```
