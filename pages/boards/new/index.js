import {
  InputWrapper,
  ZipcodeWrapper,
  Zipcode,
  Label,
  Password,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Subject,
  Contents,
} from "../../../styles/boardsNew";

export default function BoardsNewPage() {
  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 작성해주세요." />
        </InputWrapper>
      </WriterWrapper>

      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 입력해주세요." />
      </InputWrapper>

      <InputWrapper>
        <Label>내용</Label>
        <Contents type="text" placeholder="내용을 입력해주세요." />
      </InputWrapper>

      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250"></Zipcode>
        </ZipcodeWrapper>
      </InputWrapper>
    </Wrapper>
  );
}
