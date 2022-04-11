import React, { Component } from 'react';

import Button from '@mui/material/Button';
import "./Course.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Delete from '@mui/icons-material/Delete';
import AddBox from '@mui/icons-material/AddBox';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
// import  from '../Components/InstituteCard';

import {Link,Outlet,} from  "react-router-dom";
import CourseSearchFilter from '../Components/CourseSearchFilter';
import HeaderStudent from '../Components/HeaderStudent';

function EnrolledCourse(props) {
    return (
        <div>
        <HeaderStudent/>
              


          <div>
         <div className="card">

<div className="container">
  

 

  <Grid container  className="rowgrid"  item xs={12} sm={4} md={12}>
                <Grid  className="gridelement" >
                <p>course name :</p>
                </Grid>
                <Grid  className="gridelement">
                <p>Number of student :</p>
                </Grid>
                <Grid   className="gridelement">
                <p> Course Duration :</p>
                </Grid>
               
             </Grid>

             <Grid container className="rowgrid"  item xs={12} sm={4} md={12}>
                <Grid  className="gridelement">
               <p>Course Description :</p>
                </Grid>
                <Grid className="gridelement" >
                <p  >Course Available timing :</p>
                </Grid>
                <Grid  className="gridelement" >
               <p>Institute Name :</p>
                </Grid>
               
               
             </Grid>



</div>
<div> <Button variant='outlined' startIcon={<AddBox/>} style={{marginLeft:"10px"} } disabled>Enrolled</Button></div>

<div>

</div>
</div>

         
      </div>
      <Outlet />
          </div>
    );
}
export default EnrolledCourse;