import { WebView } from 'react-native-webview';
import { SafeContainer, Title, webView } from './styles';
import { IArticle } from './types';

export default function Article({ route }: IArticle) {
  const { params } = route;
  return (
    <SafeContainer>
      <Title>{params.title}</Title>
      <WebView
        style={webView.container}
        originWhitelist={['*']}
        source={{ html: '<h1><center>Hello world</center></h1>' }}
      />
    </SafeContainer>
  );
}
