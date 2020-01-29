/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  // eslint-disable-next-line max-len
  Card, CardActionArea, CardMedia, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, ListSubheader,
} from '@material-ui/core';

import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { To } from './styles';

import { Character as ICharacter } from '../../types/Character';
import { Starship } from '../../types/Starship';

import api from '../../services/api';

const Character: React.FC = (props: any) => {
  const [character, setCharacter] = useState<ICharacter>();
  const [starships, setStarships] = useState<Starship[]>([]);

  async function getCharacter(): Promise<number> {
    const { id } = props.location.state.char;
    const result = await api.get(`https://swapi.co/api/people/${id}/?format=json`);
    const resultLocal = await api.get(`/characters/${id}`);
    const char: ICharacter = result.data;
    char.starships.map(async (s) => {
      const response = await api.get(s);
      setStarships((prevState) => ([...prevState, response.data]));
    });
    const charLocal: ICharacter = resultLocal.data;
    setCharacter({
      ...char,
      image: charLocal.image,
    });
    return 1;
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (

    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={character?.name}
          height="500"
          image={character?.image}
          title={character?.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character?.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Ano de Nascimento: ${character?.birth_year}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Altura: ${character?.height}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Peso: ${character?.mass}kg`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Gênero: ${character?.gender === 'male' ? 'Masculino' : 'Feminino'} `}
          </Typography>
          <List
            component="nav"
            aria-label="starships"
            subheader={(
              <ListSubheader component="div" id="nested-list-subheader">
                Starships
              </ListSubheader>
            )}
          >
            {starships.map((ss, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <To to={{ pathname: `/starship/${ss?.name}`, state: { starship: ss } }} key={key}>
                <ListItem button>
                  <ListItemIcon>
                    <AirplanemodeActiveIcon />
                  </ListItemIcon>
                  <ListItemText primary={ss?.name} />
                </ListItem>
              </To>
            ))}
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Character;
