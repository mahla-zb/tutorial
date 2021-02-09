import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import '../static/styles/Main.scss';
import Img from '../static/images';
import Divider from '@material-ui/core/Divider';
import { Link, BrowserRouter } from 'react-router-dom';
import Icons from '../static/icons';

const cards = {
  1: {
    title: 'LPCI-1',
    img: <Img.course2 className="image" />,
    icon: <Icons.course.time className="icon" />,
    time: '3:20:00',
    price: 'رایگان',
  },
  2: {
    title: 'LPCI-2',
    img: <Img.course1 className="image" />,
    icon: <Icons.course.time className="icon" />,
    time: '4:20:00',
    price: 'رایگان',
  },
  3: {
    title: 'LPCI-2',
    img: <Img.course3 className="image" />,
    icon: <Icons.course.time className="icon" />,
    time: '5:20:00',
    price: 'رایگان',
  },
};
const Main = ({ title }) => {
  return (
    <>
      <Link to="Page2">
        <Grid container alignContent="center" alignItems="center">
          <Grid item container justify="flex-end" xs={12}>
            <Img.logo className="logo" />
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          direction="row"
          className="container"
          spacing={4}
        >
          {Object.values(cards).map(value => {
            return (
              <Grid item container justify="center" xs={12} md={6} lg={4}>
                <Card className="Card">
                  {value.img}
                  <CardContent className="title">
                    <span className="title-text">{value.title}</span>
                    <Divider variant="middle" className="title-divider" />
                    <Grid container className="card-detail">
                      <Grid item xs={1}>
                        {value.icon}
                      </Grid>
                      <Grid item className="time-text" xs={1}>
                        {value.time}
                      </Grid>
                      <Grid
                        item
                        container
                        className="price-text"
                        xs={10}
                        justify="flex-end"
                      >
                        {value.price}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Link>
    </>
  );
};

export default Main;
