import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    { char: "A", desc: `Learn the letter A` },
    { char: "B", desc: `Learn the letter B` },
    { char: "C", desc: `Learn the letter C` },
    { char: "D", desc: `Learn the letter D` },
    { char: "E", desc: `Learn the letter E` },
    { char: "F", desc: `Learn the letter F` },
    { char: "G", desc: `Learn the letter G` },
    { char: "H", desc: `Learn the letter H` },
    { char: "I", desc: `Learn the letter I` },
    { char: "J", desc: `Learn the letter J` },
    { char: "K", desc: `Learn the letter K` },
    { char: "L", desc: `Learn the letter L` },
    { char: "M", desc: `Learn the letter M` },
    { char: "N", desc: `Learn the letter N` },
    { char: "O", desc: `Learn the letter O` },
    { char: "P", desc: `Learn the letter P` },
    { char: "Q", desc: `Learn the letter Q` },
    { char: "R", desc: `Learn the letter R` },
    { char: "S", desc: `Learn the letter S` },
    { char: "T", desc: `Learn the letter T` },
    { char: "U", desc: `Learn the letter U` },
    { char: "V", desc: `Learn the letter V` },
    { char: "W", desc: `Learn the letter W` },
    { char: "X", desc: `Learn the letter X` },
    { char: "Y", desc: `Learn the letter Y` },
    { char: "Z", desc: `Learn the letter Z` },
  ];

  return (
    <>
      <Navbar />
      <List>
        <HeroSection
          imageHeading="A"
          description="A"
          url="http://localhost:3000/character/A"
        />
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
