import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    {
      char: "Hello",
      desc: `Learn the word`,
      url: "/word/Hello",
    },
    {
      char: "Hi",
      desc: `Learn the word`,
      url: "/word/Hi",
    },
    {
      char: "Yes",
      desc: `Learn the word`,
      url: "/word/Yes",
    },
    {
      char: "No",
      desc: `Learn the word`,
      url: "/word/No",
    },
    {
      char: "You",
      desc: `Learn the word`,
      url: "/word/You",
    },
    {
      char: "Boy",
      desc: `Learn the word`,
      url: "/word/Boy",
    },
    {
      char: "Girl",
      desc: `Learn the word`,
      url: "/word/Girl",
    },
    {
      char: "God",
      desc: `Learn the word`,
      url: "/word/God",
    },
  ];

  return (
    <>
      <Navbar />
      <List>
        {details.map((detail, index) => {
          return (
            <HeroSection
              key={index}
              category={detail.char}
              imageHeading={detail.char}
              description={detail.desc}
              url={detail.url}
            />
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
