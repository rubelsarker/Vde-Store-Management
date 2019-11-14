import Inventory from '../components/views/Inventory'
import ItemDetails from '../components/views/itemDetails'
export const routes =
[
    {
        path:'/',
        component:Inventory
    },
    {
        path:'/item/:id',
        component:ItemDetails
    }
]