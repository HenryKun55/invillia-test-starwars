import React, { useState, useEffect } from 'react';

import {
  GridList, GridListTileBar, GridListTile, IconButton,
} from '@material-ui/core';

import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Image, Header } from './styles';

import { Character } from '../../types/Character';

import nophoto from '../../assets/nophoto.png';

import api from '../../services/api';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  async function getCharacters(): Promise<number> {
    const result = await api.get('characters');
    setCharacters(result.data);
    return 1;
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <GridList cellHeight={200} spacing={20} style={{ textAlign: 'center' }}>
      <GridListTile key="Subheader" cols={2} style={{ height: 50 }}>
        <Header>Personagens</Header>
      </GridListTile>
      {characters.map((char, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <GridListTile key={key}>
          <Link to={{ pathname: `/character/${char.id}`, state: { char } }}>
            <Image src={char.image || nophoto} alt={char.name} />
            <GridListTileBar
              title={char.name}
              actionIcon={(
                <IconButton aria-label="Character">
                  <MdAccountCircle color="#FFF" />
                </IconButton>
                    )}
            />
          </Link>
        </GridListTile>
      ))}
    </GridList>
  );
};

export default Home;
