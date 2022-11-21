import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Already from "../../Already";
import Chain from "../../Chain";
import Digital from "../../Digital";
import Enhance from "../../Enhance";
import Speak from "../../Speak";
import Success from "../../Success";
import SupplyChain from "../../SupplyChain";
import Technology from "../../Technology";
import Works from "../../Works";
import Image from "./Image";
import styles from "./LandingSection.module.css";

function LandingSection() {

    const whatsapp= useNavigate()

    function  handleWhatsapp(){
        whatsapp("/whatsapp")
    }
    const  contact = useNavigate()

    function contactus(){
        contact("/contactus")
    }


  return (
    <>
    <Grid container className={styles.outerContainer}>
      <Grid
        container
        item
        xs={6}
        direction="column"
        className={styles.innerContainer}
      >
        <Grid item>
          <Typography className={styles.largeText}>
            Tech-enabled B2B Platform for Made-to-Order Goods
          </Typography>
          <Typography className={styles.mediumText}>
            We Digitally Transform Vendor Management
            <br />
            Supply Chain For Enterprises
          </Typography>
        </Grid>
        <Button style={{ color: "white" , backgroundColor:"green" ,padding:"2" , Margin:"12 16 0 0", height:"40px"  }} onClick={handleWhatsapp}>
          <img
            src="https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/602b9f41224e095bfb5c24dc_whatsapp%20(1)%201.svg"
            loading="lazy"
            width="24"
            alt=""
            class="image-24"
            
          />{" "}
          Send us your requirement
        </Button>
        <br/>
        <Button style={{ color: "blue" , backgroundColor:"white" ,padding:"2"  }} onClick={contactus}>
         
          Get In Touch
        </Button>
      </Grid>

    </Grid>
    <br/>
    <br/>
    <Image/>
    <br/>
    <SupplyChain/>
    <br/>
    <br/>
    <Digital/>
    <br/>
    <br/>
    <Technology/>
    <br/>
    <br/>
    <Enhance/>
    <br/>
    <br/>
    <Chain/>
    <br/>
    <br/>
    <Already/>
    <br/>
    <br/>
    <Speak/>
    <br/>
    <br/>
    <Success/>
    <br/>
    <br/>
    <Works/>
    </>

    
  );
}

export default LandingSection;
