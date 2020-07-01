import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import scrollToComponent from 'react-scroll-to-component';
import "../App.css";
import {
  InputGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// import pictarmyali from '../assets/img/armyali-white.png';
// import pictbg from '../assets/img/bg.jpg';
// import Jumbotron from "./jumbotron";
// import Skills from "./skill";
// import Experience from "./experience";
// import Portofolio from "./portofolio";
// import Services from "./services";
// import Clients from "./clients";
// import Testimonial from "./testimonial";
// import Contact from "./contact";
import queryString from 'query-string';


class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapse:false,
      navState:"",
      theposition:"",
      listItem:["Item pertama","Item kedua","Item ketiga","Item keempat","Item kelima","Item keenam","Item ketujuh","Item kedelapan","Item kesembilan","Item kesepuluh","Item kesebelas","Item keduabelas"]
    };
  }
  navToggle = () =>  {
    this.setState({
      ...this.state,
      navCollapse: !this.state.navCollapse
    });
  }
  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    console.log(params.id);
    return (
      <div>
        <Container fluid={true} style={{backgroundColor:"#003060",position:"-webkit-sticky",position:"sticky",top:0,zIndex:998}}>
          <Row>
            <Col className="p-2" xs="12" sm="12" md="12" style={{color:"#FFFFFF",fontWeight:"bold"}}>
              <span className="myFont-title">NAHMTHAISUKI & BBQ</span>
            </Col>
          </Row>
          <Row>
            <Col className="px-2" xs="12" sm="12" md="12">
              <div className="lineSeparator-white-1"></div>
            </Col>
          </Row>
          <Row>
            <Col className="p-2" xs="12" sm="12" md="12" style={{color:"#FFFFFF"}}>
              <span className="myFont-subtitle">JL K.H WAHID HASYIM No 79-81 Gondangdia, Menteng, Jakarta pusat</span>
            </Col>
          </Row>
          <Row style={{backgroundColor:"#FCFFFD"}}>
            <Col xs="12" sm="12" md="12" style={{padding:10}}>
              <div className="card">
                <div className="card-body" style={{padding:5}}>
                  <Row style={{fontWeight:"bold"}}>
                    <Col xs="6" sm="6" md="6" className="text-left">
                      <span>NOMOR MEJA</span>
                    </Col>
                    <Col xs="6" sm="6" md="6" className="text-right">
                      <span>00123</span>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row style={{backgroundColor:"#FCFFFD",borderTop:"#000 0.2vh solid",borderBottom:"#000 0.2vh solid",fontWeight:"bold"}}>
            <Col xs="12" sm="12" md="12" className="p-1 text-center">
              <span>ORDER LIST</span>
            </Col>
          </Row> */}
        </Container>
        <Container fluid={true} style={{backgroundColor:"#FCFFFD",paddingTop:10,paddingLeft:10,paddingRight:10,paddingBottom:"25vh"}}>
          {this.state.listItem.length > 0 && this.state.listItem.map((listItem,index) =>
            <div className="card" key={index}>
              <div className="card-body" style={{padding:5}}>
                <Row>
                    <Col xs="12" sm="12" md="12" className="text-center">
                      <span style={{fontWeight:"bold"}}>{listItem}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3" sm="3" md="3" className="text-center">
                      999
                    </Col>
                    <Col xs="1" sm="1" md="1" className="text-center">
                      x
                    </Col>
                    <Col xs="4" sm="4" md="4" className="text-center">
                      999.999.999
                    </Col>
                    <Col xs="4" sm="4" md="4" className="text-center">
                      999.999.999
                    </Col>
                </Row>
              </div>
            </div>
          )}
        </Container>
        {/* <Container style={{backgroundColor:"#F5F5F5",position:"-webkit-sticky",position:"sticky",bottom:0,zIndex:999,padding:10}}> */}
        <Container fluid={true} style={{height:"25vh",backgroundColor:"#F5F5F5",position:"fixed",bottom:0,padding:10}}>
          <div className="card">
            <div className="card-body" style={{padding:10}}>
              <Row>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>Subtotal</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>Tax</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row style={{fontWeight:"bold"}}>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>TOTAL</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Col xs="12" sm="12" md="12" className="p-2">
                  <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/order_page" })}>Tambah order</button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    anbyaBoilerplate: state.reducer.anbyaBoilerplate
  };
};

export default withRouter(connect(mapStateToProps)(mainPage));