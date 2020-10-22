import Link from 'next/link';

const OrderIndex = ({ orders }) => {
  return (
    <ul>
      {orders.map((order) => {
        if (order.status === 'created') {
          return (
            <li key={order.id}>
              <Link href='/orders/[orderId]' as={`/orders/${order.id}`}>
                <a>{order.ticket.title}</a>
              </Link>
              - {order.status}
            </li>
          );
        }
        return (
          <li key={order.id}>
            {order.ticket.title} - {order.status}
          </li>
        );
      })}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;