import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styled from "styled-components";

const index = () => {
  const details = [
    {
      char: "Thank You",
      desc: `Learn the sentence`,
      url: "/sentence/Thank_You",
    },
    {
      char: "Who are you?",
      desc: `Learn the sentence`,
      url: "/sentence/Who_Are_You",
    },
    {
      char: "How are you?",
      desc: `Learn the sentence`,
      url: "/sentence/How_Are_You",
    },
    {
      char: "I am fine",
      desc: `Learn the sentence`,
      url: "/sentence/I_Am_Fine",
    },
    {
      char: "I like this",
      desc: `Learn the sentence`,
      url: "/sentence/I_Like_This",
    },
    {
      char: "I can",
      desc: `Learn the sentence`,
      url: "/sentence/I_Can",
    },
    {
      char: "I will",
      desc: `Learn the sentence`,
      url: "/sentence/I_Will",
    },
    {
      char: "Thank God",
      desc: `Learn the sentence`,
      url: "/sentence/Thank_God",
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
