import HeroSectionDesc from "@/components/HeroSectionDesc";
import Navbar from "@/components/Navbar";
import styled from "styled-components";

const Girl = () => {
  return (
    <>
      <Navbar />
      <LearnPage>
        <HeroSectionDesc
          imageHeading={"Girl"}
          category={"Girl"}
          description="A, or a, is the first letter and the first vowel of the Latin alphabet, used in the modern English alphabet, the alphabets of other western European languages and others worldwide."
          url="/Test"
        />
      </LearnPage>
      ;
    </>
  );
};

export default Girl;

const LearnPage = styled.div`
  margin: 5rem 10rem;

  .heroCard {
    padding: 2rem;
    background: none;
  }

  .LanguageShowcase {
    background-color: rgba(255, 255, 255, 0.2);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }

  a {
    background-color: rgba(255, 255, 255, 0.2);
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    box-shadow: 0 0 100px rgba(127, 244, 255, 0.8);
    transition: 0.3s;
  }
`;
