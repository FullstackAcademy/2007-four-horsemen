import React from 'react'

const ViewAllOrders = (props) =>{

    const orders = props.orders
    console.log(orders)
    return (<ul>
            {orders.map(order => {
                return(
                   <li key = {order.id}>
                        <div>
                           {order.user.name}'s Order:
                       </div>
                       <div>
                           Order Id : {order.id}
                       </div>
                       <div>
                           Total : ${order.total}
                       </div>
                       <div>
                           Order Data : {order.order_date}
                       </div>
                       <div>
                           Shipping Address : {order.shipping_address}
                       </div>
                       <div>
                           Order Statues : {order.order_status}
                       </div>
                   </li>
                )
            } )}
            </ul>)

}
export default ViewAllOrders