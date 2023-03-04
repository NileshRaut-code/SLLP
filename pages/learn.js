import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import styled from "styled-components";

const Learn = () => {
  return (
    <>
      <Navbar />
      <LearnPage>
        <HeroSection />
      </LearnPage>
      ;
    </>
  );
};

export default Learn;

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
