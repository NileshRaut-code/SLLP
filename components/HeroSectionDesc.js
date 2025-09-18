import Link from "next/link";
import styled from "styled-components";

const HeroSectionDesc = (props) => {
  return (
    <>
      <HeroCard className="heroCard">
        <LanguageShowcase className="LanguageShowcase">
          <video src="/Welcome.mp4" controls></video>
        </LanguageShowcase>

        <Info>
          <h1>{props.category}</h1>
          <p>{props.description}</p>
          <Link href={`${props.url}`}>Get Started</Link>
        </Info>
      </HeroCard>
    </>
  );
};

export default HeroSectionDesc;

const HeroCard = styled.div`
  color: var(--txt);
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius);
  width: 100%;
`;

const LanguageShowcase = styled.div`
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  width: 50%;

  video {
    width: 100%;
    border-radius: var(--border-radius);
  }
`;
const Info = styled.div`
  width: 50%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: yellow; */

  h1 {
    font-size: 2.5em;
    margin-bottom: 1rem;
  }

  p {
    /* background-color: red; */
    line-height: 1.2rem;
  }

  a {
    background-color: var(--bg);
    width: max-content;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    color: var(--txt);
    text-decoration: none;

    &:hover {
      font-weight: bold;
      transition: 0.3s;
    }
  }
`;
