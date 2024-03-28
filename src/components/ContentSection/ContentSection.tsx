import { Wrapper, Nav } from './ContentSection.styled'
import { NavLink, Route, Routes } from 'react-router-dom'
import WorkPage from '../../pages/WorkPage/WorkPage'
import { gql, useQuery } from '@apollo/client';
import { PageInfo } from '../../common/types';
import WpPage from '../../pages/WpPage/WpPage';

const GET_ALL_PAGES = gql`
  query getPages {
    pages {
      nodes {
        id
        title
        slug
      }
    }
  }
`;

const ContentSection = () => {
  const { data } = useQuery(GET_ALL_PAGES);

  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">
          Work
        </NavLink>

        {data?.pages.nodes.map((page: PageInfo) => (
          <NavLink key={page.id} to={`/${page.slug}`}>
            {page.title}
          </NavLink>
        ))}
      </Nav>

      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/:slug*" element={<WpPage />} />
      </Routes>
    </Wrapper>
  )
}

export default ContentSection