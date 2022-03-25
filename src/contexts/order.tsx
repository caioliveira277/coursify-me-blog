import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
  ReactNode,
} from 'react';

export type OrderType = 'asc' | 'desc' | 'more_view' | 'less_view';

type PropsOrderContext = {
  orderState: OrderType;
  setOrderState: Dispatch<SetStateAction<OrderType>>;
};

const DEFAULT_VALUE: { orderState: OrderType; setOrderState: () => '' } = {
  orderState: 'asc',
  setOrderState: () => '',
};

export const OrderContext = createContext<PropsOrderContext>(DEFAULT_VALUE);

export function OrderContextProvider({
  children,
}: PropsWithChildren<ReactNode>) {
  const [orderState, setOrderState] = useState(DEFAULT_VALUE.orderState);
  const valueProvider = useMemo(
    () => ({ orderState, setOrderState }),
    [orderState],
  );

  return (
    <OrderContext.Provider value={valueProvider}>
      {children}
    </OrderContext.Provider>
  );
}
