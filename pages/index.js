import Home from '../components/Home'
import Layout from '../components/layout/Layout'
import MiniCart from '../components/MiniCart'


export default function Index(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home'>
       <MiniCart />
       <Home />
    </Layout>
  )
}
