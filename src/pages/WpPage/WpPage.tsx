import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Wrapper } from './WpPage.styled';

const GET_PAGE_BY_ID = gql`
query getPageBySlug($slug: ID!) {
  page(id: $slug, idType: URI) {
    id
    title
    content
  }
}
`;

const WpPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_PAGE_BY_ID, {
    variables: {
      slug: slug
    }
  });
  
  if (loading) return <p>Loading...</p>;

  if (error || !data.page) return <p>Unable to load page :/</p>;

  return (
    <Wrapper>
      <h1>{data.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </Wrapper>
  )
}

export default WpPage

