import { Picker } from '@react-native-picker/picker';
import { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Title, picker, PickerContainer } from './styles';

export default function Order() {
  const themeContext = useContext(ThemeContext);
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Container>
      <Title>Ordenar por:</Title>
      <PickerContainer style={picker.border}>
        <Picker
          style={picker.container}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item
            color={themeContext.colors.gray_600}
            label="A-Z"
            value="asc"
          />
          <Picker.Item
            color={themeContext.colors.gray_600}
            label="Z-A"
            value="desc"
          />
          <Picker.Item
            color={themeContext.colors.gray_600}
            label="Mais visualizado"
            value="more_view"
          />
          <Picker.Item
            color={themeContext.colors.gray_600}
            label="Menos visualizado"
            value="less_view"
          />
        </Picker>
      </PickerContainer>
    </Container>
  );
}
