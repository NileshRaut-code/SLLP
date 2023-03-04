import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    { char: "Thank You", desc: `Learn the sentence` },
    { char: "Who are you?", desc: `Learn the sentence` },
    { char: "How are you?", desc: `Learn the sentence` },
    { char: "I am fine", desc: `Learn the sentence` },
    { char: "I like this", desc: `Learn the sentence` },
    { char: "I can", desc: `Learn the sentence` },
    { char: "I will", desc: `Learn the sentence` },
    { char: "Thank God", desc: `Learn the sentence` },
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
