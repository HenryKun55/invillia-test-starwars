/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@material-ui/core';

import { Starship } from '../../types/Starship';

import plane from '../../assets/plane.png';

const Character: React.FC = (props: any) => {
  const [starship, setStarship] = useState<Starship>();

  useEffect(() => {
    setStarship(props.location.state.starship);
  }, []);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={starship?.name}
          height="500"
          image={plane}
          title={starship?.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {starship?.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Modelo: ${starship?.model}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Fabricante: ${starship?.manufacturer}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Valor: ${starship?.cost_in_credits === 'unknown' ? 'Desconhecido' : starship?.cost_in_credits}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Tamanho: ${starship?.length}m `}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Velocidade Máxima: ${starship?.max_atmosphering_speed}km/h `}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`MGLT: ${starship?.MGLT === 'unknown' ? 'Desconhecido' : starship?.MGLT}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Capacidade de Carga: ${starship?.cargo_capacity}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Character;
