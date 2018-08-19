/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ backgroundColor: "#ffffff" }}>
          <div style={{ color: "#ffffff", padding: "40px" }}>
            <Row style={{ backgroundColor: "#ffffff" }}>
              <Column mCol={1} style={{ backgroundColor: "#ffffff" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    height: "30px",
                    alignItems: "flex-start"
                  }}
                >
                  <img
                    src="https://github.com/eunjishim/myproject01/blob/master/app/assets/Oval%203.png?raw=true"
                    style={{ width: "30" }}
                  />
                </div>
              </Column>
              <Column mCol={7} style={{ backgroundColor: "#ffffff" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px",
                    alignItems: "center",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <span />
                </div>
              </Column>
              <Column mCol={1} style={{ backgroundColor: "#ffffff" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px",
                    alignItems: "center"
                  }}
                >
                  <span style={{ color: "#757575" }} />
                </div>
              </Column>
              <Column mCol={1} style={{ backgroundColor: "#ffffff" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px",
                    alignItems: "center",
                    backgroundColor: "#ffffff"
                  }}
                >
                  <span style={{ color: "#757575" }}>Work</span>
                </div>
              </Column>
              <Column mCol={1} style={{ backgroundColor: "#ffffff" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px",
                    alignItems: "center"
                  }}
                >
                  <span style={{ color: "#757575" }}>Dribble</span>
                </div>
              </Column>
              <Column mCol={1} style={{ backgroundColor: "#ffffff" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px",
                    alignItems: "center",
                    color: "#757575"
                  }}
                >
                  <span>Email</span>
                </div>
              </Column>
            </Row>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                height: "640px",
                alignItems: "center",
                backgroundColor: "#ffffff",
                paddingLeft: "100px"
              }}
            >
              <span style={{ fontSize: "87px", color: "#cacaca" }}>
                Hello :)
              </span>
            </div>
            <Row>
              <Column style={{ width: "50%" }} col={6} mCol={12}>
                <div
                  style={{ backgroundColor: "#e7b4b4", paddingTop: "100%" }}
                />
              </Column>
              <Column style={{ width: "50%" }} mCol={12} col={6}>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#d39999",
                    paddingTop: "100%"
                  }}
                />
              </Column>
              <Column style={{ width: "50%" }} mCol={12} col={6}>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#d39999",
                    paddingTop: "100%"
                  }}
                />
              </Column>
              <Column style={{ width: "50%" }} mCol={12} col={6}>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#e7b4b4",
                    paddingTop: "100%"
                  }}
                />
              </Column>
            </Row>
            <Row>
              <Column mCol={2} style={{ paddingTop: "50px" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "30px",
                      alignItems: "center",
                      backgroundColor: "#cfcfcf",
                      borderRadius: "4px"
                    }}
                  >
                    <span />
                  </div>
                </div>
              </Column>
            </Row>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
