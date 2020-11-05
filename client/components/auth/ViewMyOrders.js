import React from 'react'

const ViewMyOrder = (props) =>{

    const orders = props.orders


    return (<ul>
            {orders.map(order => {
                return(
                   <li key = {order.id}> 

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
export default ViewMyOrder