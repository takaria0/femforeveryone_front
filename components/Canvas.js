class Canvas extends React.Component {

  componentDidUpdate() {
    let rawCoordinates = this.props.data;
    rawCoordinates = {
      "geometries": [
        [rawCoordinates.x1, rawCoordinates.y1],
        [rawCoordinates.x2, rawCoordinates.y2],
        [rawCoordinates.x3, rawCoordinates.y3],
        [rawCoordinates.x4, rawCoordinates.y4],
      ]
    };
    const coords = rawCoordinates.geometries;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.font = "40px Courier black"
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 1000, 1000);
    for (let i = 0; i < coords.length; i++) {
      ctx.lineTo(coords[i][0], coords[i][1]);
    }
    ctx.lineTo(coords[0][0], coords[0][1]);
    ctx.stroke();
  };

  componentDidMount() {
    let rawCoordinates = this.props.data;
    rawCoordinates = {
      "geometries": [
        [rawCoordinates.x1, rawCoordinates.y1],
        [rawCoordinates.x2, rawCoordinates.y2],
        [rawCoordinates.x3, rawCoordinates.y3],
        [rawCoordinates.x4, rawCoordinates.y4],
      ]
    };
    const coords = rawCoordinates.geometries;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.font = "40px Courier black"

    ctx.beginPath();
    for (let i = 0; i < coords.length; i++) {
      ctx.lineTo(coords[i][0], coords[i][1]);
    }
    ctx.lineTo(coords[0][0], coords[0][1]);
    ctx.stroke();
    ctx.clearRect(0, 0, ctx.width, ctx.height);
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={1000} height={500} />
      </div>
    )
  }
}

export default Canvas;