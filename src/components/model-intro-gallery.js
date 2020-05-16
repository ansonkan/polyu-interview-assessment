import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import DiscussionIcon from "../../static/discussion.svg"
import WhiteStarIcon from "../../static/white-star.svg"
import BlueStarIcon from "../../static/blue-star.svg"
import Tn1 from "../../static/ml-ex-1.png"
import Tn2 from "../../static/ml-ex-2.png"
import Tn3 from "../../static/ml-ex-3.png"
import Tn4 from "../../static/ml-ex-4.png"
import Tn5 from "../../static/ml-ex-5.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;
`

const Card = styled.div`
  width: 18%;
  box-shadow: 2.5px 1.8px 0.4em 0 #9d9d9d;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
`

const Thumbnail = styled.img`
  width: 100%;
  max-height: 125px;
  padding: 10px;
`

const Desc = styled.div`
  height: 100px;
  color: #1f1f1f;
  font-size: .7em;
  line-height: 1.6em;
  background-color: #dcdcdc;
  padding: 20px;
  word-break: normal;
  overflow: hidden;
`

const CardFooter = styled.div`
  height: 25px;
  background-color: #4d4d4d;
  overflow: auto;
  zoom: 1;
  padding: 0 4.5%;
  display: flex;
  justify-content: space-between;
`

const Discussion = styled.div`
  display: flex;
  color: white;
  align-items: center;
`

const marginLeft = css`
  margin-left: 3px;
`

const Star = styled.img`
  width: .7em;
  max-width: 100%;
  height: auto;
  margin: 0 1px;
`

const Rating = styled.div`
  display: flex;
`

const createRatingStars = num => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.unshift(<Star key={i} src={num-- > 0 ? BlueStarIcon : WhiteStarIcon} alt="ws" />)
  }
  return arr;
}

const ModelIntroGallery = props => {
  const [cards, setCards] = useState([
    {
      thumbnail: Tn1,
      desc: ["PTM_CNT", "CNT FET", "by HKUST/Tsinghua"],
      discCount: 5,
      rating: 4
    },
    {
      thumbnail: Tn2,
      desc: ["In-Ga-Zn-O", "In-Ga-Zn-O TFT", "by Stanford"],
      discCount: 23,
      rating: 5
    },
    {
      thumbnail: Tn3,
      desc: ["BSIM4", "BSIM4", "by Cinvestav/Buap/URV"],
      discCount: 1,
      rating: 2
    },
    {
      thumbnail: Tn4,
      desc: ["n-type", "n-type CNT FET", "by HKUST"],
      discCount: 2,
      rating: 4
    },
    {
      thumbnail: Tn5,
      desc: ["HiSIM2", "HiSIM2", "by MIT"],
      discCount: 0,
      rating: 0
    }
  ])

  useEffect(() => {
    let interval = setInterval(() => {
      setCards([cards[cards.length - 1], ...cards.slice(0, 4)])
    }, 7000)

    return () => {
      clearInterval(interval)
    }
  }, [cards])

  return (
    <Wrapper>
      {
        cards.map(({ thumbnail, desc, discCount, rating }, i) => (
          <Card key={i}>
            <ThumbnailWrapper>
              <Thumbnail src={thumbnail} alt={i} />
            </ThumbnailWrapper>
            <Desc>
              {desc.map(t => <div>{t}</div>)}
            </Desc>
            <CardFooter>
              <Discussion>
                <img src={DiscussionIcon} alt="dis" />
                <span css={marginLeft}>{discCount}</span>
              </Discussion>
              <Rating>
                {createRatingStars(rating)}
              </Rating>
            </CardFooter>
          </Card>
        ))
      }
    </Wrapper>
  )
}

export default ModelIntroGallery