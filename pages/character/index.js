import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    {
      char: "A",
      desc: `Learn the letter A`,
      url: "http://localhost:3000/character/A",
    },
    {
      char: "B",
      desc: `Learn the letter B`,
      url: "http://localhost:3000/character/B",
    },
    {
      char: "C",
      desc: `Learn the letter C`,
      url: "http://localhost:3000/character/C",
    },
    {
      char: "D",
      desc: `Learn the letter D`,
      url: "http://localhost:3000/character/D",
    },
    {
      char: "E",
      desc: `Learn the letter E`,
      url: "http://localhost:3000/character/E",
    },
    {
      char: "F",
      desc: `Learn the letter F`,
      url: "http://localhost:3000/character/F",
    },
    {
      char: "G",
      desc: `Learn the letter G`,
      url: "http://localhost:3000/character/G",
    },
    {
      char: "H",
      desc: `Learn the letter H`,
      url: "http://localhost:3000/character/H",
    },
    {
      char: "I",
      desc: `Learn the letter I`,
      url: "http://localhost:3000/character/I",
    },
    {
      char: "J",
      desc: `Learn the letter J`,
      url: "http://localhost:3000/character/J",
    },
    {
      char: "K",
      desc: `Learn the letter K`,
      url: "http://localhost:3000/character/K",
    },
    {
      char: "L",
      desc: `Learn the letter L`,
      url: "http://localhost:3000/character/L",
    },
    {
      char: "M",
      desc: `Learn the letter M`,
      url: "http://localhost:3000/character/M",
    },
    {
      char: "N",
      desc: `Learn the letter N`,
      url: "http://localhost:3000/character/N",
    },
    {
      char: "O",
      desc: `Learn the letter O`,
      url: "http://localhost:3000/character/O",
    },
    {
      char: "P",
      desc: `Learn the letter P`,
      url: "http://localhost:3000/character/P",
    },
    {
      char: "Q",
      desc: `Learn the letter Q`,
      url: "http://localhost:3000/character/Q",
    },
    {
      char: "R",
      desc: `Learn the letter R`,
      url: "http://localhost:3000/character/R",
    },
    {
      char: "S",
      desc: `Learn the letter S`,
      url: "http://localhost:3000/character/S",
    },
    {
      char: "T",
      desc: `Learn the letter T`,
      url: "http://localhost:3000/character/T",
    },
    {
      char: "U",
      desc: `Learn the letter U`,
      url: "http://localhost:3000/character/U",
    },
    {
      char: "V",
      desc: `Learn the letter V`,
      url: "http://localhost:3000/character/V",
    },
    {
      char: "W",
      desc: `Learn the letter W`,
      url: "http://localhost:3000/character/W",
    },
    {
      char: "X",
      desc: `Learn the letter X`,
      url: "http://localhost:3000/character/X",
    },
    {
      char: "Y",
      desc: `Learn the letter Y`,
      url: "http://localhost:3000/character/Y",
    },
    {
      char: "Z",
      desc: `Learn the letter Z`,
      url: "http://localhost:3000/character/Z",
    },
  ];

  return (
    <>
      <Navbar />
      <List>
        {details.map((detail, i) => {
          return (
            <HeroSection
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
