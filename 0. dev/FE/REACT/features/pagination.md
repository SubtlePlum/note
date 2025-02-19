# pagination

받아온 페이지 별 데이터에 따라 props를 넘겨받아 간편하게 페이지네이션을 구축할 수 있다.

css는 프로젝트에 따라 수정 필요

```typescript
import styled from "styled-components";
import { useEffect, useState } from "react";

interface Props {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  handlePageChange: any;
  maxItems: number;
}

export const Pagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePageChange,
  maxItems,
}: Props) => {
  // pages button length
  const totalLength =
    Math.ceil(totalItemsCount / itemsCountPerPage) < 1
      ? 1
      : Math.ceil(totalItemsCount / itemsCountPerPage);
  // pages button length arr
  const pagingArray = Array.from(
    {
      length: totalLength,
    },
    (item, index) => index
  );

  // when active page change
  // page set's No. setting
  const [listNum, setListNum] = useState(1);
  useEffect(() => {
    setListNum(Math.floor(Number((activePage + maxItems - 1) / maxItems)));
  }, [activePage, maxItems]);

  // numbers in one set
  const firPagingArr = Array.from(
    {
      length: maxItems,
    },
    (item, index) => {
      return index;
    }
  );
  const otherPagingArr = Array.from(
    {
      length: maxItems,
    },
    (item, index) => {
      return index + maxItems * (listNum - 1);
    }
  );
  const listNumIndex = listNum === 1 ? firPagingArr : otherPagingArr;

  return (
    <PagingUl>
      <li
        onClick={() => {
          if (activePage !== 1) {
            handlePageChange(activePage - 1);
          }
        }}
        className={activePage === 1 ? "noPrev" : ""}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"></path>
        </svg>
      </li>
      {pagingArray.map((item, index) => {
        if (
          listNumIndex[0] <= index &&
          index <= listNumIndex[listNumIndex.length - 1]
        ) {
          return (
            <li
              key={item}
              id={`${index + 1}`}
              className={index + 1 === activePage ? "activePage" : "page"}
              onClick={() => {
                handlePageChange(index + 1);
              }}
            >
              {index + 1}
            </li>
          );
        }
      })}
      <li
        onClick={() => {
          if (activePage !== pagingArray.length) {
            handlePageChange(activePage + 1);
          }
        }}
        className={activePage === pagingArray.length ? "noNext" : ""}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
        </svg>
      </li>
    </PagingUl>
  );
};

const PagingUl = styled.ul`
  padding: 0;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  transition: 0.2s;
  & ul,
  li {
    list-style: none;
  }
  & li {
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 25px;
    color: ${(props) => props.theme.buttonFontColor};
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.activeButtonColor};
      background-color: ${(props) => props.theme.activeBackgroundColor};
    }
  }
  & .activePage {
    color: ${(props) => props.theme.activeButtonColor};
    background-color: ${(props) => props.theme.activeBackgroundColor};
  }
  & li:first-child,
  li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.prevNextFont};
    background-color: ${(props) => props.theme.prevNextBackground};
    &:hover {
      background-color: ${(props) => props.theme.prevNextHover};
    }
  }
  & li:first-child.noPrev,
  li:last-child.noNext {
    color: ${(props) => props.theme.noPrevNextFont};
    background-color: ${(props) => props.theme.noPrevNextBackground};
    cursor: auto;
  }
`;
```

## 사용 예제

```typescript
import styled from "styled-components";
import Image from "next/image";
import { Pagination } from "./Pagination";
import { useState } from "react";
import { MarkDownList } from "@/types/pages";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  posts: MarkDownList[];
}

export const PostGrid = ({ posts }: Props) => {
  const dateHandler = (date: string) => {
    return Number(new Date(date));
  };
  const postlist: MarkDownList[] = posts.sort(
    (a: MarkDownList, b: MarkDownList) =>
      dateHandler(b.date) - dateHandler(a.date)
  );

  const [activePage, setActivePage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  let itemsCountPerPage = 6; // 페이지당 아이템 개수 설정
  let indexArray = Array.from({ length: itemsCountPerPage }, (item, index) => {
    return index;
  });
  let pageIndex: number[] = [];
  pageIndex = indexArray.map(
    (item) => item + (activePage - 1) * itemsCountPerPage
  );

  const router = useRouter();
  const { searchItem } = router.query;
  const pathname = router.pathname;
  const listName =
    pathname === "/search" ? `"${searchItem}" 관련 글` : "전체 글";
  return (
    <GridContainer>
      <CountPost>
        <span>
          {listName} ({posts.length})
        </span>
      </CountPost>
      <GridBox>
        {postlist.map((item, index) => {
          const { title, description, category, date } = item;
          if (pageIndex[0] <= index && index <= pageIndex[5]) {
            return (
              <Link key={index} href={`/${title.replaceAll(" ", "-")}`}>
                <Card>
                  <Image
                    src={`/images/cards/${category.toUpperCase()}.png`}
                    alt="카테고리 이미지"
                    width={200}
                    height={150}
                    priority
                  />
                  <CardBody>
                    <p>
                      {description.length > 30
                        ? description.slice(0, 31) + "..."
                        : description}
                    </p>
                    <span>{date.replaceAll("-", ". ")}</span>
                  </CardBody>
                </Card>
              </Link>
            );
          }
        })}
      </GridBox>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={posts.length}
        handlePageChange={handlePageChange}
        maxItems={5}
      />
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
`;

const CountPost = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.componentShadow};
  font-weight: bold;
  width: 660px;

  & svg {
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.componentHover};
    }
  }
`;

const GridBox = styled.ul`
  margin: 20px 0;
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-gap: 30px;
  list-style: none;
`;

const Card = styled.li`
  height: 300px;
  border-radius: 5px 5px 5px 5px;
  background-color: ${(props) => props.theme.componentBackground};
  cursor: pointer;
  transition: 0.1s;
  & img {
    border-radius: 5px 5px 0 0;
  }
  &:hover {
    box-shadow: 1px 1px 4px 2px ${(props) => props.theme.componentShadow};
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  height: 133px;
  color: ${(props) => props.theme.componentFontColor};
  font-weight: bold;
  & p {
    width: 100%;
    overflow-x: hidden;
  }
  & span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.componentSubFontColor};
  }
`;
```
