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
  state: OrderType;
  setState: Dispatch<SetStateAction<OrderType>>;
};

const DEFAULT_VALUE: { state: OrderType; setState: () => '' } = {
  state: 'asc',
  setState: () => '',
};

export const OrderContext = createContext<PropsOrderContext>(DEFAULT_VALUE);

export function OrderContextProvider({
  children,
}: PropsWithChildren<ReactNode>) {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const valueProvider = useMemo(() => ({ state, setState }), [state]);

  return (
    <OrderContext.Provider value={valueProvider}>
      {children}
    </OrderContext.Provider>
  );
}
