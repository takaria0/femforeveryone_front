const axios = require('axios');
import Canvas from './Canvas';

class CoordinatesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      x1: 100,
      y1: 50,
      x2: 600,
      y2: 50,
      x3: 600,
      y3: 300,
      x4: 100,
      y4: 300,
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({ [event.target.name]: parseInt(event.target.value) });
    console.log('set new state!!!!!!!!!!!!!!')
}

  handleSubmit(event) {
    const postData = {
      "geometries": [
        [this.state.x1, this.state.y1],
        [this.state.x2, this.state.y2],
        [this.state.x3, this.state.y3],
        [this.state.x4, this.state.y4],
      ]
    };

    axios.post('http://localhost:4000/geometry', postData)
      .then(function (res) {
        const show = JSON.stringify(res.data);
        return {
          show: show
        };
      })
      .catch(function (err) {
        console.log(JSON.stringify(err));
      });
    event.preventDefault();
  }

  render() {
    return (
      <div><Canvas data={this.state} onChange={this.handleChange}/>
      <form onSubmit={this.handleSubmit}>
        <label>
          x1:
          <input type="number" name="x1" value={this.state.x1} onChange={this.handleChange} min="0" max="1000" />
        </label>
        <label>
          y1:
          <input type="number" name="y1" value={this.state.y1} onChange={this.handleChange} min="0" max="1000" />
        </label>
        <label>
          x2:
          <input type="number" name="x2" value={this.state.x2} onChange={this.handleChange} min="0" max="1000" />
        </label>
        <label>
          y2:
          <input type="number" name="y2" value={this.state.y2} onChange={this.handleChange} min="0" max="1000" />
        </label><br></br>
        <label>
          x3:
          <input type="number" name="x3" value={this.state.x3} onChange={this.handleChange} min="0" max="1000" />
        </label>
        <label>
          y3:
          <input type="number" name="y3" value={this.state.y3} onChange={this.handleChange} min="0" max="1000" />
        </label>
        <label>
          x4:
          <input type="number" name="x4" value={this.state.x4} onChange={this.handleChange} min="0" max="1000" />
        </label>
        <label>
          y4:
          <input type="number" name="y4" value={this.state.y4} onChange={this.handleChange} min="0" max="1000" />
        </label>

        <input type="submit" value="Submit" />
        <style jsx>{`
        label {
          text-decoration: none;
          color: blue;
          font-size: 16px;
          margin: 10px;
        }

        input[type=submit] {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 10px 10px;
          text-decoration: none;
          margin: 4px 2px;
          cursor: pointer;
        }
      `}</style>
      </form>
    </div>
    );
  }
}

export default CoordinatesForm;