import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoBoyName: "",
      numberOfPieces: "",
    };
  }

  componentDidMount = async () => {
    await this.props.setMintBtnTimer();
  };

  callMintMyNFTFromApp = (e) => {
    e.preventDefault();
    this.props.mintMyNFT(
      this.state.cryptoBoyName,
      this.state.numberOfPieces
    );
  };

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <form onSubmit={this.callMintMyNFTFromApp} className="pt-4 mt-1">
          <img className="img-square" src="images/mosaic2.jpg" alt="illustration" />
          <div className="mt-4">
            <label htmlFor="price">Number of Pieces</label>
            <input
              required
              type="number"
              name="price"
              id="numberOfPieces"
              value={this.state.numberOfPieces}
              className="form-control"
              placeholder="You can crystalize with 9 pieces"
              onChange={(e) =>
                this.setState({ numberOfPieces: e.target.value })
              }
            />
          </div>
          <button
            id="mintBtn"
            style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
            type="submit"
            className="btn mt-4 btn-block btn-outline-primary"
          >
            Mint Mosaic NFT
          </button>
        </form>
      </div>
    );
  }
}

export default FormAndPreview;
