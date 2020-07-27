import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// export default function Home(): ReactElement {
const Home: React.FC = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name);
    setName('Luciano');
  }, [name]);

  return (
    <div>
      <Title>{name}</Title>
    </div>
  );
};

export default Home;
