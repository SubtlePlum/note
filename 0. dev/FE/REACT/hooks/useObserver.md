# useObserver

```typescript
import { useState, useRef } from "react";

export const useObserver = () => {
  const [isObserved, setIsObserved] = useState(false);
  const observerRef: any = useRef();
  const observer = (node: any) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsObserved(true);
      }
    });
    node && observerRef.current.observe(node);
  };
  return {
    observer, // for target's ref
    isObserved,
  };
};
```

---

## Example

```typescript
import styled from "styled-components";
import { MarkDownList } from "@/types/pages";
import { useState, useRef } from "react";
import { LoadingSpinner } from "@/util/LoadingSpinner";
import { SkeletonCard } from "./SkeletonCard";
import Image from "next/image";
import Link from "next/link";

interface Props {
  postlist: MarkDownList[];
}

export const PostInfiScroll = ({ postlist }: Props) => {
  const page = useRef<number>(1);
  const [isLoading, setisLoading] = useState(true); // force Loading
  setTimeout(() => {
    setisLoading(false);
  }, 1000);

  let itemsPerPage = 10;
  let indexArray = Array.from({ length: itemsPerPage }, (item, index) => {
    return index;
  });

  const [fetchPost, setFetchPost] = useState<MarkDownList[]>([]);

  const [hasNextPage, setHasNextPage] = useState(true);
  const fatchData = (pageNum: number) => {
    if (hasNextPage && !isLoading) {
      let newIndex = indexArray.map(
        (item) => item + (pageNum - 1) * itemsPerPage
      );
      let newPosts = postlist.filter((post, index) => {
        if (newIndex[0] <= index && index <= newIndex[newIndex.length - 1]) {
          return post;
        }
      });
      setFetchPost((prev) => prev.concat(newPosts));
      page.current += 1;
      setHasNextPage(postlist.length > fetchPost.length);
    }
  };

  const observerRef: any = useRef();
  const observer = (node: any) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        setisLoading(true);
        fatchData(page.current);
        setTimeout(() => {
          setisLoading(false);
        }, 1500);
      }
    });
    node && observerRef.current.observe(node);
  };

  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      {fetchPost?.map((item, index) => {
        const { description, date, category, title } = item;
        return (
          <Link key={index} href={`/${title.replaceAll(" ", "-")}`}>
            <Container>
              <Image
                src={`/images/cards/${category.toUpperCase()}.png`}
                alt={`${category}`}
                width={150}
                height={150}
                priority
              />
              <ContentBody>
                <p>
                  {description.length < 45
                    ? description
                    : `${description.slice(0, 45)}...`}
                </p>
                <span>{date}</span>
              </ContentBody>
            </Container>
          </Link>
        );
      })}
      {isLoading ? <SkeletonCard /> : null}
      <IoTarget
        id="observeTarget"
        ref={observer}
        style={isLoading ? { display: "none" } : { display: "block" }}
      ></IoTarget>
    </>
  );
};

const Container = styled.li`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90vw;
  height: 150px;
  color: ${(props) => props.theme.componentFontColor};
  background-color: ${(props) => props.theme.componentBackground};
  box-shadow: 1px 1px 4px 1px ${(props) => props.theme.componentShadow};
`;

const ContentBody = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
  height: 100px;
  & p {
    font-weight: bold;
    overflow-x: hidden;
  }
  & span {
    text-align: right;
    font-size: 0.8rem;
  }
`;

const IoTarget = styled.div``;
```
