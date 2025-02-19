# carousel slider

무한 슬라이드를 구현할 수 있다.

```typescript
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { slideImages } from "../mainMockData";
import { useResizeWidth } from "../../../hooks/useResizeWidth";
import { useBooleanHandler } from "../../../hooks/useBooleanHandler";
import { useResponsive } from "../../../hooks/useResponsive";
import { PrevArrow, NextArrow } from "../../common/prevNextArrow";
import { EventTimer } from "./eventTimer";

export const EventSlider = () => {
  const { thisMedia } = useResponsive(); // 모바일인 경우 화살표 항상 노출
  const { windowWidth } = useResizeWidth(); // 브라우저 가로 길이 상시 체크
  const arrowHandler = useBooleanHandler(); // 마우스 인입 여부에 따른 슬라이드 화살표 노출

  const imageArrLength = slideImages.length;
  const sliderWidth = imageArrLength * windowWidth;

  const slideRef = useRef({
    nowMoving: false,
  });
  const [slideState, setSlideState] = useState({
    imageNum: 1,
    indexPx: -windowWidth,
    transition: 0.6,
  });

  const prevBtn = () => {
    if (slideRef.current.nowMoving) return;
    slideRef.current.nowMoving = true;
    if (slideState.imageNum === 1) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: imageArrLength - 2,
        indexPx: prev.indexPx + windowWidth,
      }));
      setTimeout(() => {
        setSlideState((prev) => ({
          ...prev,
          imageNum: imageArrLength - 2,
          indexPx: -windowWidth * (imageArrLength - 2),
          transition: 0,
        }));
        setTimeout(() => {
          setSlideState((prev) => ({
            ...prev,
            transition: 0.6,
          }));
        }, 100);
      }, 600);
    } else {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum - 1,
        indexPx: prev.indexPx + windowWidth,
      }));
    }
    setTimeout(() => {
      slideRef.current.nowMoving = false;
    }, 700);
  };

  const nextBtn = () => {
    if (slideRef.current.nowMoving) return;
    slideRef.current.nowMoving = true;
    if (slideState.imageNum === imageArrLength - 2) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: 1,
        indexPx: prev.indexPx - windowWidth,
      }));
      setTimeout(() => {
        setSlideState((prev) => ({
          ...prev,
          imageNum: 1,
          indexPx: -windowWidth,
          transition: 0,
        }));
        setTimeout(() => {
          setSlideState((prev) => ({
            ...prev,
            transition: 0.6,
          }));
        }, 100);
      }, 600);
    } else {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum + 1,
        indexPx: prev.indexPx - windowWidth,
      }));
    }
    setTimeout(() => {
      slideRef.current.nowMoving = false;
    }, 700);
  };

  const [slideTimer, setSlideTimer] = useState(0);
  const slideTimerInterval = () => {
    setSlideTimer((prev) => prev + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(slideTimerInterval, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (slideTimer !== 0) {
      nextBtn();
    }
  }, [slideTimer]);

  return (
    <SlideWrap
      onMouseEnter={() => arrowHandler.handler(true)}
      onMouseLeave={() => arrowHandler.handler(false)}
    >
      <Slider
        style={{
          width: `${sliderWidth}`,
          transform: `translateX(${slideState.indexPx}px)`,
          transition: `${slideState.transition}s`,
        }}
      >
        {slideImages.map((item, index) => {
          return (
            <ItemWrap key={index} style={{ width: `${windowWidth}` }}>
              <EventItem
                src={item}
                alt={`event${index + 1}`}
                style={{ width: `${windowWidth / 2}` }}
              />
            </ItemWrap>
          );
        })}
      </Slider>
      {thisMedia < 4 || arrowHandler.isTrue ? (
        <>
          <PrevArrow
            style={{ transform: "translateY(-375px)" }}
            onClick={prevBtn}
          />
          <NextArrow
            style={{ transform: "translateY(-375px)", right: "0" }}
            onClick={nextBtn}
          />
        </>
      ) : null}
      <EventTimer />
    </SlideWrap>
  );
};

const SlideWrap = styled.div`
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
`;

const ItemWrap = styled.div`
  display: flex;
`;
const EventItem = styled.img`
  width: 100vw;
  height: 700px;
  object-fit: fill;
  cursor: pointer;
`;
```

# 일반 슬라이드(양 끝이 존재)

일반 슬라이드는 더 간편하게 구현할 수 있다.

```typescript
import styled from "styled-components";
import { useState } from "react";
import { navItems, bestItemsArray } from "../mainMockData";
import { useResizeWidth } from "../../../hooks/useResizeWidth";
import { useResponsive } from "../../../hooks/useResponsive";
import { useBooleanHandler } from "../../../hooks/useBooleanHandler";
import { PrevArrow, NextArrow } from "../../common/prevNextArrow";
import { Container, SessionHead, ItemInfo } from "../../common/style";

export const TodayBest = () => {
  const { windowWidth } = useResizeWidth();
  const { thisMedia } = useResponsive();
  const arrowHandler = useBooleanHandler();
  const BestItemsWidth =
    ((windowWidth - 10 * (thisMedia - 1)) * 0.9) / thisMedia;
  // ((브라우저 가로 - (마진 * (박스 내 한 번에 움직일 아이템 개수))) * 박스 전체 길이(width: 90%;)) / 현재 미디어별로 노출해줄 아이템 개수(모바일 1 | 태블릿 2 | 데스크탑 4)

  // 이미지 한개만 움직이는 경우에는 이미지 길이(이미지를 담고 있는 박스 길이)만 입력해도 충분

  const [navSelect, setNavSelect] = useState(0);

  const contentHandler = (index: number) => {
    setNavSelect(index);
  };

  const itemsLengthInCategory = bestItemsArray[navSelect].length;
  const sliderWidth = itemsLengthInCategory * windowWidth;
  const [slideState, setSlideState] = useState({
    imageNum: 1,
    indexPx: -0,
  });

  const moveIndexPx = (BestItemsWidth + 10) * thisMedia;
  const prevBtn = () => {
    if (slideState.imageNum !== 1) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum - 1,
        indexPx: prev.indexPx + moveIndexPx,
      }));
    }
  };
  const nextBtn = () => {
    if (slideState.imageNum !== Math.ceil(itemsLengthInCategory / thisMedia)) {
      setSlideState((prev) => ({
        ...prev,
        imageNum: prev.imageNum + 1,
        indexPx: prev.indexPx - moveIndexPx,
      }));
    }
  };

  return (
    <Container>
      <SessionHead id="todayBest">Today Best</SessionHead>
      <BestItemNav>
        {navItems.map((item, index) => {
          return (
            <BestItemCategory
              key={index}
              onClick={() => contentHandler(index)}
              style={navSelect === index ? { color: "black" } : {}}
            >
              {item}
            </BestItemCategory>
          );
        })}
      </BestItemNav>
      <SlideWrap
        onMouseEnter={() => arrowHandler.handler(true)}
        onMouseLeave={() => arrowHandler.handler(false)}
      >
        <BestItemSlider
          style={{
            width: `${sliderWidth}`,
            transform: `translateX(${slideState.indexPx}px)`,
          }}
        >
          {bestItemsArray[navSelect].map((item, index) => {
            return (
              <BestItem key={index} style={{ width: `${BestItemsWidth}px` }}>
                <ImageWrap>
                  <BestItemImg
                    src={item}
                    alt="item"
                    style={{ width: `${BestItemsWidth}px` }}
                  />
                </ImageWrap>
                <ItemInfo brand="Brand" itemName="Item Name" price="300,000" />
              </BestItem>
            );
          })}
        </BestItemSlider>
        {thisMedia < 4 || arrowHandler.isTrue ? (
          <>
            <PrevArrow
              style={{ transform: "translateY(-440px)" }}
              onClick={prevBtn}
            />
            <NextArrow
              style={{
                transform: "translateY(-440px)",
                right: `5%`,
              }}
              onClick={nextBtn}
            />
          </>
        ) : null}
      </SlideWrap>
    </Container>
  );
};

const BestItemNav = styled.nav`
  display: flex;
  height: 50px;
`;
const BestItemCategory = styled.button`
  margin-right: 20px;
  border: none;
  background: none;
  width: max-content;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  user-select: none;
`;

const SlideWrap = styled.div`
  overflow: hidden;
`;
const BestItemSlider = styled.div`
  display: flex;
  height: 660px;
  transition: 0.6s;
`;
const BestItem = styled.div`
  margin-right: 10px;
  height: 670px;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  background-color: #f1f1f1;
`;
const BestItemImg = styled.img`
  height: 330px;
  object-fit: cover;
`;
```
