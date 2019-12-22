import Layout from '../components/Layout';
import Canvas from '../components/Canvas';
import Forms from '../components/Forms';
const axios = require('axios');

const Index = props => (
  <Layout>
    <h1>FEM for Everyone</h1>
    <h2><Forms /></h2>
    <h2>Coordinates</h2>
    {/* <p>{JSON.stringify(JSON.parse(props.show).geometries)}</p> */}
  </Layout>
);

export default Index;