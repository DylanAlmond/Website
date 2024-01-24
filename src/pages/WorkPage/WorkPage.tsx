import { CardGrid, Wrapper } from './WorkPage.styles'
import Card from '../../components/Card/Card'
import { gql, useQuery } from '@apollo/client';
import { Post } from '../../common/types';
import Placeholder from '../../components/Placeholder/Placeholder';

const GET_ALL_POSTS = gql`
  query getAllProjects {
    projects(first: 9) {
      nodes {
        id
        title
        projectFields {
          description
          featuredLink
          thumbnail {
            node {
              sourceUrl(size: MEDIUM)
            }
          }
        }
      }
    }
  }
`;

const WorkPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    // Return a loading state or skeleton screen
    return (
      <Wrapper>
        <CardGrid>
          {[...Array(9)].map((_, i) =>
            <Placeholder key={i} />
          )}
        </CardGrid>
      </Wrapper>
    );
  }

  if (error) return <p>Unable to load posts :/</p>;

  const posts = data?.projects.nodes || [];

  if (posts.length === 0) {
    return <p>No matching posts found.</p>;
  }

  return (
    <Wrapper>
      <CardGrid>
        {posts.map((post: Post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardGrid>
    </Wrapper>
  )
}

export default WorkPage