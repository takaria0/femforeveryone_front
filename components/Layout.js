import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
};

const headerStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid black'
};

const Layout = props => (
  <div style={layoutStyle}>
    <h1>FEM for Everyone</h1>
    <div style={headerStyle}>
      <Header />
    </div>
    {props.children}
  </div>
);

export default Layout;