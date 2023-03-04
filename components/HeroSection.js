import Link from "next/link";
import styled from "styled-components";

const HeroSection = (props) => {
  return (
    <>
      <HeroCard className="heroCard">
        <LanguageShowcase className="LanguageShowcase">
          <h1>{props.imageHeading}</h1>
          <h4>{props.category}</h4>
        </LanguageShowcase>

        <Info>
          <h1>{props.category}</h1>
          <p style={{ marginTop: "-30px" }}>
            {null}
            {/* THIS IS ONLY FOR LEARN SECTION */}
          </p>
          <p>{props.description}</p>
          <Link href={`${props.url}`}>Get Started</Link>
        </Info>
      </HeroCard>
    </>
  );
};

export default HeroSection;

const HeroCard = styled.div`
  background: var(--card-bg);
  color: var(--txt);
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius);
`;

const LanguageShowcase = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);

  h1 {
    text-align: center;
    margin: 2rem 0;
  }
`;
const Info = styled.div`
  width: 75%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2.5em;
    margin-bottom: 1rem;
  }

  p {
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
