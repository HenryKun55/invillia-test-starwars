/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  // eslint-disable-next-line max-len
  Box, Card, CardActionArea, CardMedia, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, ListSubheader, CircularProgress,
} from '@material-ui/core';

import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AirplanemodeInactiveIcon from '@material-ui/icons/AirplanemodeInactive';

import useDimensions from '../../util/useDimensions';

import { To } from './styles';

import { Character as ICharacter } from '../../types/Character';
import { Starship } from '../../types/Starship';

import api from '../../services/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Character: React.FC = (props: any) => {
  const [character, setCharacter] = useState<ICharacter>();
  const [loadingChar, setLoadingChar] = useState<boolean>(true);
  const [loadingStarShips, setLoadingStarShips] = useState<boolean>(true);
  const [starships, setStarships] = useState<Starship[]>([]);
  const { width } = useDimensions();

  async function getCharacter(): Promise<number> {
    const { id } = props.location.state.char;
    const result = await api.get(`https://swapi.co/api/people/${id}/?format=json`);
    const resultLocal = await api.get(`/characters/${id}`);
    const char: ICharacter = result.data;
    if (char.starships.length > 0) {
      char.starships.map(async (s) => {
        const response = await api.get(s);
        setStarships((prevState) => ([...prevState, response.data]));
        setLoadingStarShips(false);
      });
    } else {
      setLoadingStarShips(false);
    }
    const charLocal: ICharacter = resultLocal.data;
    setCharacter({
      ...char,
      image: charLocal.image,
    });
    setLoadingChar(false);
    return 1;
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (

    <Card>
      <CardActionArea>
        {loadingChar ? (
          <Typography component="h4">
            <Box textAlign="center" fontWeight="light" marginTop={5}>
                Carregando
            </Box>
          </Typography>
        ) : (
          <CardMedia
            component="img"
            alt={character?.name}
            height="300"
            image={character?.image}
            title={character?.name}
            style={{ objectFit: width < 768 ? 'cover' : 'contain' }}
          />

        ) }
        <CardContent style={{ textAlign: loadingChar ? 'center' : 'initial' }}>
          {loadingChar ? (
            <CircularProgress />
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                {character?.name}
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                {`Ano de Nascimento: ${character?.birth_year === 'unknown' ? 'Desconhecido' : character?.birth_year}`}
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                {`Altura: ${character?.height === 'unknown' ? 'Desconhecido' : character?.height}`}
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                {`Peso: ${character?.mass === 'unknown' ? 'Desconhecido' : character?.mass.concat('kg')}`}
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
                {loadingStarShips ? (
                  <CircularProgress />
                ) : (
                  <>
                    {starships.length > 0 ? starships.map((ss, key) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <To to={{ pathname: `/starship/${ss?.name}`, state: { starship: ss } }} key={key}>
                        <ListItem button>
                          <ListItemIcon>
                            <AirplanemodeActiveIcon />
                          </ListItemIcon>
                          <ListItemText primary={ss?.name} />
                        </ListItem>
                      </To>
                    )) : (
                      <ListItem button>
                        <ListItemIcon>
                          <AirplanemodeInactiveIcon />
                        </ListItemIcon>
                      </ListItem>
                    ) }
                  </>
                )}
              </List>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Character;
