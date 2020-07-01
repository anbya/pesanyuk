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
import pict300x300 from '../assets/img/300x300.png';
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
import Test from "./BCmain";
import queryString from 'query-string';


class Orderdetailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapse:false,
      navState:"",
      theposition:"",
      testKategory:["Kategory pertama","kategory kedua","kategory ketiga","kategory keempat","kategory kelima","kategory keenam","kategory ketujuh","kategory kedelapan","kategory kesembilan"]
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
            <Container fluid={true} style={{backgroundColor:"#003060",position:"-webkit-sticky",position:"sticky",top:0,zIndex:998,paddingTop:10,paddingBottom:10}}>
                <Row>
                    <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <InputGroup>
                            <Input placeholder="Search" />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} style={{backgroundColor:"#FCFFFD",paddingBottom:"8vh"}}>
                {this.state.testKategory.length > 0 && this.state.testKategory.map((testKategory,index) =>
                    <div className="card" key={index}>
                        <div className="card-body" style={{padding:2}}>
                            <Row >
                                <Col xs="4" sm="4" md="4">
                                    <img className="portoimage" width="100%" src={pict300x300} alt="pict300x300" />
                                </Col>
                                <Col xs="8" sm="8" md="8">
                                    <span style={{fontWeight:"bold"}}>{testKategory}</span><br />
                                    <span>Rp xxx.xxx.xxx</span>
                                    <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/list_order"})}>Tambah</button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )}
            </Container>
            {/* <Container fluid={true} style={{backgroundColor:"#003060",position:"-webkit-sticky",position:"sticky",bottom:0,zIndex:998,paddingTop:10,paddingBottom:10}}> */}
            <Container fluid={true} style={{height:"8vh",backgroundColor:"#003060",position:"fixed",bottom:0}}>
                <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/list_order",search: '?id=3030' })}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Pesanan saya</button>
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

export default withRouter(connect(mapStateToProps)(Orderdetailpage));