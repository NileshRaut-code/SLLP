import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <PageFooter>
      <h1>Sign Language Learning Platform</h1>

      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Documentation</Link>
        </li>
        <li>
          <Link href="#">Report</Link>
        </li>
        <li>
          <Link href="#">Try It Out</Link>
        </li>
      </ul>
    </PageFooter>
  );
};

export default Footer;

const PageFooter = styled.div`
  background-color: rgba(217, 217, 217, 0.1);
  color: var(--txt);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    width: 15ch;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 2rem;
  }

  a {
    color: #d9d9d9;
    text-decoration: none;
  }
`;
