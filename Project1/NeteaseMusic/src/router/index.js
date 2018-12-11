import React from 'react';
import dynamic from 'dva/dynamic';

// 引入一级路由
import LoginPage from '../routes/LoginPage';
import MainPage from '../routes/MainPage';
import PlayPage from '../routes/PlayPage';
import DistinguishPage from '../routes/DistinguishPage'

// 引入二级路由
import AccountPage from '../routes/account/Index';
import DiscoverPage from '../routes/discover/Index';
import FriendPage from '../routes/friend/Index';
import MyPage from '../routes/my/Index';
import VideoPage from '../routes/video/Index';

import RecommendPage from '../routes/discover/Recommend';
import SearchPage from '../routes/discover/Search';


export default {
  routes: [{
    path: '/login',
    component: LoginPage
  }, {
    path: '/play/:id?',
    component: PlayPage
  }, {
    path: '/distinguish/:id?',
    component: DistinguishPage
  }, {
    path: '/main',
    component: MainPage,
    children: [{
      path: '/main/account',
      component: AccountPage
    },{
      path: '/main/discover',
      component: DiscoverPage
    },{
      path: '/main/friend',
      component: FriendPage
    },{
      path: '/main/my',
      component: MyPage
    },{
      path: '/main/video',
      component: VideoPage
    },{
      path: '/main/recommend',
      component: RecommendPage
    },{
      path: '/main/search',
      component: SearchPage
    }]
  },{
    path: '/',
    redirect: '/main/discover'
  }]
}
