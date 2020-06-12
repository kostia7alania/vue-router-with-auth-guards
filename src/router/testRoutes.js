
import HelloWorld2 from '@/components/HelloWorld2'
import HelloWorld3 from '@/components/HelloWorld3'
import HelloWorld4 from '@/components/HelloWorld4'

const testRoutes = [{
    path: '/test/:id',
    name: 'testName',
    component: HelloWorld2,
    children: [
        {
            path: '',
            components: {
                default: HelloWorld3,
                second: HelloWorld4
            }
        }
    ],
    meta: {
        requiresAuth: true
    }
}]
export default testRoutes