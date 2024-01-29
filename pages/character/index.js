import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    {
      char: "A",
      desc: `Learn the letter A`,
      url: "/character/A",
    },
    {
      char: "B",
      desc: `Learn the letter B`,
      url: "/character/B",
    },
    {
      char: "C",
      desc: `Learn the letter C`,
      url: "/character/C",
    },
    {
      char: "D",
      desc: `Learn the letter D`,
      url: "/character/D",
    },
    {
      char: "E",
      desc: `Learn the letter E`,
      url: "/character/E",
    },
    {
      char: "F",
      desc: `Learn the letter F`,
      url: "/character/F",
    },
    {
      char: "G",
      desc: `Learn the letter G`,
      url: "/character/G",
    },
    {
      char: "H",
      desc: `Learn the letter H`,
      url: "/character/H",
    },
    {
      char: "I",
      desc: `Learn the letter I`,
      url: "/character/I",
    },
    {
      char: "J",
      desc: `Learn the letter J`,
      url: "/character/J",
    },
    {
      char: "K",
      desc: `Learn the letter K`,
      url: "/character/K",
    },
    {
      char: "L",
      desc: `Learn the letter L`,
      url: "/character/L",
    },
    {
      char: "M",
      desc: `Learn the letter M`,
      url: "/character/M",
    },
    {
      char: "N",
      desc: `Learn the letter N`,
      url: "/character/N",
    },
    {
      char: "O",
      desc: `Learn the letter O`,
      url: "/character/O",
    },
    {
      char: "P",
      desc: `Learn the letter P`,
      url: "/character/P",
    },
    {
      char: "Q",
      desc: `Learn the letter Q`,
      url: "/character/Q",
    },
    {
      char: "R",
      desc: `Learn the letter R`,
      url: "/character/R",
    },
    {
      char: "S",
      desc: `Learn the letter S`,
      url: "/character/S",
    },
    {
      char: "T",
      desc: `Learn the letter T`,
      url: "/character/T",
    },
    {
      char: "U",
      desc: `Learn the letter U`,
      url: "/character/U",
    },
    {
      char: "V",
      desc: `Learn the letter V`,
      url: "/character/V",
    },
    {
      char: "W",
      desc: `Learn the letter W`,
      url: "/character/W",
    },
    {
      char: "X",
      desc: `Learn the letter X`,
      url: "/character/X",
    },
    {
      char: "Y",
      desc: `Learn the letter Y`,
      url: "/character/Y",
    },
    {
      char: "Z",
      desc: `Learn the letter Z`,
      url: "/character/Z",
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
