import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import { useRouter } from "next/router";

const character = () => {
  const router = useRouter();
  const char = router.query.character;

  return (
    <>
      <Navbar />
      <LearnPage>
        <HeroSection
          imageHeading={char}
          category={char}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nemo debitis vero velit tempore, hic maxime. Veniam beatae adipisci minus blanditiis voluptatum delectus magni laudantium sapiente natus? Exercitationem velit natus a tempore, maxime ducimus ab aliquid? Enim, aperiam perspiciatis saepe, accusamus cum earum nam eum sed voluptate sapiente laborum! Obcaecati!"
          url="/Test"
        />
      </LearnPage>
      ;
    </>
  );
};

export default character;

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
