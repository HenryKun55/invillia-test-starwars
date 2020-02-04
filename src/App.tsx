import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import seo from './util/seo';

const App: React.FC = () => (
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
        {
          name: 'title',
          content: seo.descriptionAlternative,
        },
        { property: 'og:title', content: seo.title },
        { property: 'og:url', content: seo.url },
        { property: 'og:image', content: seo.image },
        { property: 'og:type', content: 'website' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'twitter:image:src', content: seo.image },
        { property: 'twitter:title', content: seo.title },
        { property: 'twitter:description', content: seo.description },
        { property: 'twitter:image', content: seo.image },
      ]}
    />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>

);

export default App;
