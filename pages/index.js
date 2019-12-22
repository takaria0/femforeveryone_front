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

Index.getInitialProps = async function () {
  const postData = {
    "geometries": [
      [50, 100],
      [500, 100],
      [500, 300],
      [50, 300]
    ]
  };

  return axios.post('http://localhost:4000/geometry', postData)
  .then(function (res) {
    const show = JSON.stringify(res.data);
    return {
      show: show
    };
  })
  .catch(function (err) {
    console.log(JSON.stringify(err));
  });
};

export default Index;