import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { Footer } from '../../components';
import { ScrollContainer, Title, webView, Container } from './styles';
import { IArticle } from './types';

export default function Article({ route }: IArticle) {
  const { params } = route;
  const { width: contentWidth } = useWindowDimensions();
  return (
    <ScrollContainer>
      <Container>
        <Title>{params.title}</Title>
        <RenderHtml
          contentWidth={contentWidth}
          baseStyle={webView.baseStyle}
          tagsStyles={webView.tagsStyles}
          source={{
            html: params.content,
          }}
        />
      </Container>
      <Footer />
    </ScrollContainer>
  );
}
