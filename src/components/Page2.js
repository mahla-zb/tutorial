import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import '../static/styles/Page2.scss';
import Card from '@material-ui/core/Card';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';
import Img from '../static/images';
import Icons from '../static/icons';
import Divider from '@material-ui/core/Divider';

const Page2 = () => {
  const description = {
    1: {
      text: ' مدرس دوره : حسن خسروجردی',
      icon: <Icons.course.profile className="icons" />,
    },
    2: {
      text: ' تعداد دانشجویان این دوره : 357 نفر',
      icon: <Icons.course.user className="icons" />,
    },
    3: {
      text: ' تعداد ویدیوها : 23 ویدیو',
      icon: <Icons.course.video className="icons" />,
    },
    4: {
      text: 'مدت زمان دوره : 00:00:00',
      icon: <Icons.course.timeCycle className="icons" />,
    },
    5: {
      text: 'سطح دوره : پیشرفته',
      icon: <Icons.course.document className="icons" />,
    },
    6: {
      text: ' وضعیت دوره : در حال برگزاری',
      icon: <Icons.course.infoCycle className="icons" />,
    },
    7: {
      text: ' تاریخ آخرین بروزرسانی : 1399/11/15',
      icon: <Icons.course.calender className="icons" />,
    },
  };

  const lesson = {
    1: {
      text: 'Determin and Configure Hardware Settings',
      time: '00:30:57',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/01-Determin%20and%20Configure%20Hardware%20Settings.mp4',
    },
    2: {
      text: 'Boot the System',
      time: '00:18:38',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/02-Boot%20the%20System.mp4',
    },

    3: {
      text: 'change runlevels and sutdown or reboot system',
      time: '00:31:08',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/03-change%20runlevels%20and%20sutdown%20or%20reboot%20system.mp4',
    },
    4: {
      text: 'Design hard disk layout',
      time: '00:37:20',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/04-Design%20hard%20disk%20layout.mp4',
    },
    5: {
      text: 'Install a boot manager',
      time: '00:30:54',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/05-Install%20a%20boot%20manager.mp4',
    },
    6: {
      text: 'managed shared libraries',
      time: '00:19:10',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/06-managed%20shared%20libraries.mp4',
    },
    7: {
      text: 'use debian package management',
      time: '00:35:11',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/07-use%20debian%20package%20management.mp4',
    },
    8: {
      text: 'Use RPM and YUM package management',
      time: '00:18:38',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/08-Use%20RPM%20and%20YUM%20package%20management.mp4',
    },
    9: {
      text: 'work on the command line',
      time: '00:58:21',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/09-work%20on%20the%20command%20line.mp4',
    },
    10: {
      text: 'process text streams using filters',
      time: '00:59:12',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/10-process%20text%20streams%20using%20filters.mp4',
    },
    11: {
      text: 'perform basic file management',
      time: '01:19:07',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/11-perform%20basic%20file%20management.mp4',
    },
    12: {
      text: 'use streams , pipes and redirects',
      time: '00:38:16',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/12-use%20streams%20%2C%20pipes%20and%20redirects.mp4',
    },
    13: {
      text: 'create, monitor and kill process',
      time: '00:35:23',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/13-create%2C%20monitor%20and%20kill%20process.mp4',
    },
    14: {
      text: 'modify process execution priorities',
      time: '00:13:19',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/14-modify%20process%20execution%20priorities.mp4',
    },
    15: {
      text: 'search texts using regular expressions',
      time: '00:27:06',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/15-search%20texts%20using%20regular%20expressions.mp4',
    },
    16: {
      text: 'perform basic file editing operations using vi',
      time: '00:34:29',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/16-perform%20basic%20file%20editing%20operations%20using%20vi.mp4',
    },
    17: {
      text: 'create partition and file systems',
      time: '00:29:23',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/17-create%20partition%20and%20file%20systems.mp4',
    },
    18: {
      text: 'maintain the integrity of filesystems',
      time: '00:35:32',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/18-maintain%20the%20integrity%20of%20filesystems.mp4',
    },
    19: {
      text: 'control mounting and unmounting of file systems',
      time: '00:24:24',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/19-control%20mounting%20and%20unmounting%20of%20file%20systems.mp4',
    },
    20: {
      text: 'manage disk qoutas',
      time: '00:19:50',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/20-manage%20disk%20qoutas.mp4',
    },
    21: {
      text: 'Manage file permissions and ownership',
      time: '00:36:35',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/21-Manage%20file%20permissions%20and%20ownership.mp4',
    },
    22: {
      text: 'create and change hard and symbolyc links',
      time: '00:23:28',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/22-create%20and%20change%20hard%20and%20symbolyc%20links.mp4',
    },
    23: {
      text: 'Find system files and place files in the correct location',
      time: '00:20:39',
      link:
        'https://tutorials.ferdowsi.cloud/lpic-1/LPIC1_101/23-Find%20system%20files%20and%20place%20files%20in%20the%20correct%20location.mp4',
    },
  };

  const preventDefault = link => {
    window.open(link, '_blank');
  };

  return (
    <Container className="container" maxWidth="xl">
      <Grid container>
        <Grid item xs={1}>
          <Img.logo className="logo" />
        </Grid>
      </Grid>
      <Grid container spacing={3} className="main-grid">
        <Grid item className="right-grid" md={4} xs={12}>
          <Card>
            <Grid container alignContent="center" alignItems="center">
              <Grid item container justify="center" xs={12}>
                <h3>قیمت این دوره : رایگان</h3>
                <Grid container>
                  {Object.values(description).map(value => {
                    return (
                      <Grid container className="left-box">
                        <Grid item container justify="flex-end" xs={2}>
                          {value.icon}
                        </Grid>
                        <Grid item container justify="flex-start" xs={10}>
                          <h5 className="value-text">{value.text}</h5>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item className="left-grid" md={8} xs={12}>
          <Card>
            <Img.course1 className="image-left" />
          </Card>
          <Card className="course-text">
            <Grid container className="card-lesson">
              <Grid item xs={7}>
                <h3 className="note">فهرست مطالب</h3>
              </Grid>
              <Grid item xs={5}>
                <h3 className="note">مدت زمان دوره</h3>
              </Grid>
              {Object.values(lesson).map((value, index) => {
                return (
                  <Grid container key={index} className="details" xs={12}>
                    <Grid item container alignItems="center" xs={12} md={9}>
                      <Grid
                        item
                        md={1}
                        xs={12}
                        className="number"
                        justify="center"
                      >
                        <Grid item xs={12} className="number-text">
                          {index + 1}
                        </Grid>
                      </Grid>
                      <Grid item md={11} xs={12}>
                        <h4 className="title-text-left">{value.text}</h4>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" md={1} xs={6}>
                      <h4>{value.time}</h4>
                    </Grid>
                    <Grid
                      container
                      item
                      className="content-left-icon"
                      justify="center"
                      md={2}
                      xs={6}
                    >
                      <Link
                        rel="noreferrer"
                        href={value.link}
                        target="_blank"
                        onClick={preventDefault(value.link)}
                      >
                        <GetAppIcon />
                      </Link>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page2;
