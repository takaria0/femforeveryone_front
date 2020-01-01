import Layout from '../components/Layout';
import Forms from '../components/Forms';

const Index = props => (
  <Layout>
    <h2><Forms props={props}/></h2>
    {/* <p>{JSON.stringify(JSON.parse(props.show).geometries)}</p> */}
  </Layout>
);

export default Index;