import React from 'react';

class ImageTile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {spans: 0};

    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    console.log(spans);

    this.setState ({ spans: spans });
    console.log(this.state.spans)
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div style = {{ gridRowEnd: `span ${this.state.spans}` }}>
        <img onLoad={this.setSpans} ref= {this.imageRef} alt={description} src= {urls.regular}/>
      </div>
    );
  }
}

export default ImageTile;