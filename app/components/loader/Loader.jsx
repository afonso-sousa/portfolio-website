import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as Styled from './Loader.styled';

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true only on the client side
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Styled.Background>
      <Styled.Loader>
        <Styled.InnerCircle>
          <Styled.FadeInImgWrapper>
            <Image src='/assets/portfolio_logo.png'
              alt='logo'
              width={150}
              height={150}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain', // Ensures the image fits inside the container
              }} />
          </Styled.FadeInImgWrapper>
        </Styled.InnerCircle>
        <Styled.HoldLeft>
          <Styled.Fill></Styled.Fill>
        </Styled.HoldLeft>
        <Styled.HoldRight>
          <Styled.Fill></Styled.Fill>
        </Styled.HoldRight>
      </Styled.Loader>
    </Styled.Background>
  )
}

export default Loader
