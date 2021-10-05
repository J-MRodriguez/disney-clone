import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0F009C43FFA959BF054181618D3FC6FFA054769778FBE4B1A2E8F499B065DED6/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="#"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/39B5CAD95C84A6C5F3C95B70BD8F3A7E8AE796DBC4F11E7ED3702BE1ADACB149/scale?width=1440&aspectRatio=1.78&format=png"
          alt="#"
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="#" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="#" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWathButton>
          <img src="/images/group-icon.png" alt="#" />
        </GroupWathButton>
      </Controls>
      <SubTitle>
        2021 • 2h 15min • Espionaje, Superhéroes, Acción y aventura
      </SubTitle>
      <Description>
        Natasha Romanoff aka Black Widow confronts the darker parts of her
        ledger when a dangerous conspiracy with ties to her past arises. Pursued
        by a force that will stop at nothing to bring her down, Natasha must
        deal with her history as a spy and the broken relationships left in her
        wake long before she became an Avenger.
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 28px;
    color: white;
  }
`;
const GroupWathButton = styled(AddButton)``;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 700px;
`;
