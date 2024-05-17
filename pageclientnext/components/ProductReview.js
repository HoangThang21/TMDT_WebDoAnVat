import styled from "styled-components";
import Input from "./Input";
import WhiteBox from "./WhiteBox";
import StartRating from "./StartRating";
import Textarea from "./Textarea";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Spinner from "./Spinner";
import { ClimbingBoxLoader } from "react-spinners";

const Title = styled.h2`
  font-size: 1.2rem;
`;
const Subtitle = styled.h3`
  font-size: 1rem;
  margin-top: 5px;
`;
const ColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;
const ReviewWrapper = styled.div`
  margin-bottom: 10px;
  border-top: 1px solid #ddd;
  padding: 10px 0;
  h3{
    margin: 3px 0;
    font-size:1rem ;
    color: #333;
    font-weight: normal;
  }
  p{
    margin: 0;
    font-size: .8rem;
    line-height: 1rem;
    color: #555;
  }
`;
const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  time {
    font-size: 12px;
    color: #aaa;
  }
 
`;

export default function ProductReview({ product }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(false);

  function submitReview() {
    const data = { title, description, stars, product: product._id };
    axios.post("/api/review/", data).then((res) => {
      setTitle("");
      setDescription("");
      setStars(0);
      loadReview();
    });
  }
  useEffect(() => {
    loadReview();
  }, []);
  function loadReview(){
    setReviewLoading(true);
    axios.get("/api/review?product=" + product._id).then((res) => {
      setReview(res.data);
      setReviewLoading(false);
    });
  }
  return (
    <>
      <Title>Đánh giá</Title>
      <ColsWrapper>
        <WhiteBox>
          <Subtitle>Thêm đánh giá</Subtitle>
          <div>
            <StartRating onChange={setStars}></StartRating>
          </div>

          <Input
            placeholder="Tiêu đề"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          ></Input>
          <Textarea
            placeholder="Nội dung"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          ></Textarea>
          <div>
            <Button primary onClick={submitReview}>
              Gửi đánh giá
            </Button>
          </div>
        </WhiteBox>
        <WhiteBox>
          <Subtitle>Tất cả bài đánh giá</Subtitle>
          {reviewLoading && <Spinner fullWidth={true}></Spinner>}

          {review.length === 0 && <p>Không có đánh giá</p>}
          {review.length > 0 &&
            review.map((re) => (
              <ReviewWrapper key={re._id}>
                <ReviewHeader>
                  <StartRating
                    size={"sm"}
                    disabled={true}
                    defaultHowmany={re.stars}
                  ></StartRating>
                  <time>
                    {new Date(re.createdAt).toLocaleTimeString("sv-SE")}
                  </time>
                </ReviewHeader>
                <div>
                  <h3>{re.title}</h3>
                  <p>{re.description}</p>
                </div>
              </ReviewWrapper>
            ))}
        </WhiteBox>
      </ColsWrapper>
    </>
  );
}
