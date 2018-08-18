/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ color: "#6b6161" }}>
          <div
            style={{
              height: "100px",
              backgroundColor: "#fcecd7",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
              color: "#ffffff"
            }}
          >
            <span
              style={{
                lineHeight: "20px",
                backgroundColor: "#e5ffcb",
                color: "#92a2b3",
                fontSize: "33px",
                fontWeight: 700
              }}
            >
              Profolio
            </span>
          </div>
          <p style={{ paddingTop: "50px", marginLeft: "100px" }}>
            <span style={{ paddingTop: "50px" }}>Hi, i'm Eunji :)</span>
          </p>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
