import { withRouter } from 'next/router';

class MeshCanvas extends React.Component {

  componentDidUpdate() {

  };

  componentDidMount() {
    let points = this.props.router.query;
    points = Object.values(points);
    console.log('Hello there')
    const canvas = this.refs.meshcanvas;
    const ctx = canvas.getContext("2d");
    ctx.font = "40px Courier black"

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'blue';
    for (let i = 0; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
      if (i === 3){ctx.lineTo(points[0][0], points[0][1]);}
      ctx.fillRect(points[i][0]-2, points[i][1]-2, 5, 5);
      // ctx.arc(points[i][0], points[i][1], 10, 0, 2 * Math.PI);
    }
    ctx.lineTo(points[0][0], points[0][1]);
    // ctx.fill();
    ctx.stroke();
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    }

  render() {
    return (
      <div>
        <h2> Meshed Coordinates </h2>
        <canvas ref="meshcanvas" width={1000} height={500} />
      </div>
    )
  }
}

export default withRouter(MeshCanvas);