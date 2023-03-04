import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    { char: "Hello", desc: `Learn the word` },
    { char: "Hi", desc: `Learn the word` },
    { char: "Yes", desc: `Learn the word` },
    { char: "No", desc: `Learn the word` },
    { char: "You", desc: `Learn the word` },
    { char: "Boy", desc: `Learn the word` },
    { char: "Girl", desc: `Learn the word` },
    { char: "God", desc: `Learn the word` },
  ];

  return (
    <>
      <Navbar />
      <List>
        {details.map((detail, i) => {
          return (
            <HeroSection imageHeading={detail.char} description={detail.desc} />
          );
        })}
      </List>
      <Footer />
    </>
  );
};

export default index;

const List = styled.div`
  /* background-color: red; */
  margin: 5rem 10rem;
  display: grid;
  place-items: center;
  place-content: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 25px;

  .heroCard {
    padding: 1rem;
  }

  .LanguageShowcase {
    height: 15rem;

    h4 {
      display: none;
    }
  }
`;
