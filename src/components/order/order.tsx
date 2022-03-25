import { Picker } from '@react-native-picker/picker';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { OrderContext } from '../../contexts/order';
import { Container, Title, picker, PickerContainer } from './styles';

export default function Order() {
  const themeContext = useContext(ThemeContext);
  const { orderState, setOrderState } = useContext(OrderContext);
  return (
    <Container>
      <Title>Ordenar por:</Title>
      <PickerContainer style={picker.border}>
        <Picker
          style={picker.container}
          selectedValue={orderState}
          onValueChange={itemValue => setOrderState(itemValue)}
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
