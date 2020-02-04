import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const seo = {
    title: 'Star Wars - A List of All Chacarcters and Starships of the Galaxy!',
    description:
          'A Galaxy far far far far far far far far far far far .... faaaaaaaaar away',
    url: 'https://swapi-front.herokuapp.com/',
    image: 'https://mfiles.alphacoders.com/761/761401.jpg',
  };

  return (
    <BrowserRouter>
      <Header />
      <Helmet
        title={seo.title}
        meta={[
          {
            name: 'description',
            property: 'og:description',
            content: seo.description,
          },
          { property: 'og:title', content: seo.title },
          { property: 'og:url', content: seo.url },
          { property: 'og:image', content: seo.image },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'twitter:image:src', content: seo.image },
          { property: 'twitter:title', content: seo.title },
          { property: 'twitter:description', content: seo.description },
        ]}
      />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>

  );
};

export default App;
