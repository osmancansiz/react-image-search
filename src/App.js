import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchInput from "./components/SearchInput";
import ImageList from './components/ImageList'

export default class App extends Component {

  state = {
    images : [],
    loading : false
  }

  onSearchSubmit = async (searchValue) => {
    this.setState({ loading: true })
    axios.get(`https://pixabay.com/api/?key=19951151-adbef200ffce8074edfecc3a4&q=${searchValue}&image_type=photo`).then((result) => {
      this.setState({ images: result.data.hits })
      this.setState({ loading: false })
    }).catch((err) => {
      this.setState({ loading: false })
      throw err;
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <div className="ui container" style={{ marginTop: "30px" }}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <div className="ui active dimmer">
              <div className="ui text loader">Loading</div>
            </div>
            <p></p>
          </div>
        </div>
      );
    } else{
      return (
        <div className="App">
          <div className="ui container" style={{ marginTop: "30px" }}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
          </div>
        </div>
      );
    }
  }
}
