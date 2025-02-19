## Acodian

```typescript
import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BoringAvatar } from "./boringAvatar";
import { commentAPI } from "@/api/api";
import { Comment } from "./comment";
import { CommentsData } from ".";
import { RiCloseLine } from "react-icons/ri";
import { CommentModal } from "./commentModal";

export const Acodian = () => {
  const closeDetailse = () => {
    const details = document.querySelector("details");
    details?.removeAttribute("open");
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [commentData, setCommentData] = useState<CommentsData[]>([]);
  const getCommentData = async () => {
    const res = await commentAPI.getCommentByPostIdPaging(18, 1);
    setCommentData(res.data.data);
  };
  useEffect(() => {
    getCommentData();
  }, []);
  console.log(commentData);
  return (
    <AcodianWrap>
      <CommentsLine>
        <summary>댓글보기</summary>
        <CommentsLineTop>
          <span>댓글</span>
          <CloseBtn onClick={closeDetailse}>
            <RiCloseLine />
          </CloseBtn>
        </CommentsLineTop>
        <p>댓글을 사용할 때는 타인을 존중해주세요</p>
        <AddComment>
          <BoringAvatar />
          <span onClick={openModal}>댓글 추가 ...</span>
        </AddComment>
        {commentData.map((comment, index) => {
          return <Comment key={comment.comment_id} commentData={comment} />;
        })}
      </CommentsLine>
      <CommentModal closeModal={closeModal} showModal={showModal} />
    </AcodianWrap>
  );
};

const AcodianWrap = styled.div`
  margin-top: 50px;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  width: 400px;
  border-top: 1px solid ${(props) => props.theme.componentBorderColor};
  border-bottom: 1px solid ${(props) => props.theme.componentBorderColor};
`;

const CommentsLine = styled.details`
  padding: 5px;
  width: 100%;
  & p {
    padding: 5px;
  }
  & summary {
  }
  & summary::marker {
    content: "";
  }
  &[open] summary {
    display: none;
  }
  & summary:before {
  }
  & summary ~ * {
    animation: closeComments 0.6s;
    @keyframes closeComments {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
  &[open] summary ~ * {
    animation: opneComments 0.6s;
    @keyframes opneComments {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const CommentsLineTop = styled.div`
  padding: 5px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 22px;
  }
`;
const CloseBtn = styled.div`
  cursor: pointer;
  & svg {
    font-size: 30px;
  }
`;

const AddComment = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  & img {
    margin-right: 10px;
  }
  & span {
    color: gray;
    font-size: 14px;
  }
`;
```

## Comment

```typescript
import styled from "styled-components";
import Image from "next/image";
import { BoringAvatar } from "./boringAvatar";
import { CiMenuKebab } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
import { CommentsData } from ".";
import { useState, useEffect } from "react";
import { TimeToToday } from "@/util/timeToToday";

interface Props {
  commentData: CommentsData;
}

export const Comment = ({ commentData }: Props) => {
  const [menuOpen, setmenuOpen] = useState(false);
  const commentMenuHandler = () => {
    setmenuOpen(!menuOpen);
  };
  const editHandler = () => {
    console.log("edit fn");
  };
  const onDelete = () => {
    console.log("delete fn");
  };
  console.log(menuOpen);
  return (
    <Container>
      <CommentsWrap>
        <UserInfo>
          <BoringAvatar />
          <span>닉네임</span>
        </UserInfo>
        <MenuIcon
          onClick={commentMenuHandler}
          style={commentData.isEditable ? {} : { display: "none" }}
        >
          <CiMenuKebab />
        </MenuIcon>
      </CommentsWrap>
      <Content>{commentData.content}</Content>
      <CreatedAt>{TimeToToday(+new Date(commentData.createdAt))}</CreatedAt>
      <CommentMenu style={menuOpen ? {} : { display: "none" }}>
        <Buttons type="button" onClick={onDelete}>
          삭제하기
        </Buttons>
        <Buttons type="button" onClick={editHandler}>
          수정하기
        </Buttons>
        <CloseIcon onClick={commentMenuHandler}>
          <RiCloseLine />
        </CloseIcon>
      </CommentMenu>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
`;
const CommentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin: 0 5px;
  }
`;
const MenuIcon = styled.div`
  cursor: pointer;
  & svg {
    font-size: 25px;
    &:hover {
      color: ${(props) => props.theme.wholeBackground};
    }
  }
`;
const Content = styled.div`
  padding: 10px;
`;
const CreatedAt = styled.div`
  padding: 0 10px;
  font-size: 12px;
  text-align: right;
  color: ${(props) => props.theme.createdAt};
`;

const CommentMenu = styled.div`
  position: absolute;
  transform: translate(280%, -110%);
  width: 100px;
  height: 80px;
  background-color: #ffffff;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: none;
`;
const Buttons = styled.button`
  padding: 5px;
  display: flex;
  border-radius: 8px;
  width: 100%;
  height: 50%;
  text-align: center;
  font-size: 15px;
  border: none;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #a5a5a5;
  }
`;
const CloseIcon = styled.div`
  position: absolute;
  font-size: 20px;
  transform: translate(365%, -275%);
  cursor: pointer;
`;
```

## AddCommentModal

```typescript
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import { BoringAvatar } from "./boringAvatar";

interface Props {
  closeModal: () => void;
  showModal: boolean;
}

export const CommentModal = ({ closeModal, showModal }: Props) => {
  return (
    <ModalBackground
      onClick={closeModal}
      style={showModal ? { display: "block" } : { display: "none" }}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Modal>
          <BoringAvatar />
          <textarea placeholder="댓글추가 ..." />
          <SendCommentBtn>
            <MdSend />
          </SendCommentBtn>
        </Modal>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
  cursor: auto;
  display: flex;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  width: 100vw;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 60px;
    height: 60px;
    padding: 5px;
    margin-right: 5px;
  }
  & textarea {
    width: 80vw;
    height: 40px;
    resize: none;
    border: none;
    font-size: 20px;
    font-weight: bold;
  }
`;

const SendCommentBtn = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  & img {
    width: 40px;
    height: 40px;
  }
  &:active {
    background-color: #dfdfdf;
  }
`;
```
