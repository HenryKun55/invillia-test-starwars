/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@material-ui/core';

import { Starship } from '../../types/Starship';

import api from '../../services/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Character: React.FC = (props: any) => {
  const [starship, setStarship] = useState<Starship>();

  async function getImage(): Promise<number> {
    const s: Starship = props.location.state.starship;
    const response = await api.get(`/starships/${s.url.replace(/\D/g, '')}`);
    setStarship({ ...s, image: response.data.image });
    return 1;
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={starship?.name}
          height="300"
          image={starship?.image}
          title={starship?.name}
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {starship?.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Modelo: ${starship?.model === 'unknown' ? 'Desconhecido' : starship?.model}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Fabricante: ${starship?.manufacturer === 'unknown' ? 'Desconhecido' : starship?.manufacturer}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Valor: ${starship?.cost_in_credits === 'unknown' ? 'Desconhecido' : starship?.cost_in_credits}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Tamanho: ${starship?.length === 'unknown' ? 'Desconhecido' : `${starship?.length}m`} `}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Velocidade Máxima: ${starship?.length === 'unknown' ? 'Desconhecido' : `${starship?.max_atmosphering_speed}km/h`} `}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`MGLT: ${starship?.MGLT === 'unknown' ? 'Desconhecido' : starship?.MGLT}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {`Capacidade de Carga: ${starship?.cargo_capacity === 'unknown' ? 'Desconhecido' : starship?.cargo_capacity}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Character;
