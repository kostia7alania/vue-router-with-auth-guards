
const HelloWorld2 = () => import('@/components/HelloWorld2')
const HelloWorld3 = () => import('@/components/HelloWorld3')
const HelloWorld4 = () => import('@/components/HelloWorld4')

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
            },
            meta: {
                requiresAuth: 1
            }
        }
    ],
    meta: {
        requiresAuth: true
    }
}]
export default testRoutes