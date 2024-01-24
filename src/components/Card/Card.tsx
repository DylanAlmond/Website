import { Post } from '../../common/types';
import { Wrapper, Img, Title, Description, FeaturedLink } from './Card.styled';
import placeholder from '../../assets/placeholder.png';

type Props = {
  post?: Post
};

function prettyUrl(value: string) {
  try {
    return new URL(value).hostname
  } catch (error) {
    return false;
  }
}

const Card = ({ post }: Props) => {
  if (!post) {
    return;
  }

  return (
    <Wrapper>
      <Img
        loading="lazy"
        src={post.projectFields.thumbnail?.node.sourceUrl || placeholder}
        alt='Post Thumbnail'
      />

      <Title>
        {post.title || 'Post Title'}
      </Title>

      <Description>
        {post.projectFields.description || 'Post Description'}
      </Description>

      {post.projectFields.featuredLink ? (
        <FeaturedLink href={post.projectFields.featuredLink}>
          {prettyUrl(post.projectFields.featuredLink)}
        </FeaturedLink>
      ) : null}
    </Wrapper>
  )
}

export default Card