import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Logo>
          <h2>SLLP</h2>
        </Logo>
      </Link>

      <Links>
        <li>
          <Link activeClassName="active" href="/character">
            Character
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/word">
            Word
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/sentence">
            Sentence
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/learn">
            Learn
          </Link>
        </li>
      </Links>

      <Buttons>
        <Link href="#">Try it out!</Link>
      </Buttons>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: var(--bg);
  display: flex;
  padding: 1rem 10rem;

  .active {
    color: skyblue;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #2cb4ef;
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 50%;

  li {
    a {
      color: var(--txt);
      text-decoration: none;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 8px 20px;
    text-decoration: none;
    color: var(--txt);
    font-weight: bold;
    border: none;
    background-color: #d9d9d980;

    &:hover {
      color: #fff;
      background-color: #2cb4ef;
      transform: scale(1.1);
      transition: 0.3s;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin: 0 10px;
  }
`;
