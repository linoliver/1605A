import dva from 'dva';
import './styles/common.css';

// 引入路由模式
// import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';

// require方式
let data = require('../public/data.json');
console.log('data...', data);

// fetch方式
fetch('/data.json').then(res=>res.json())
.then(body=>console.log('body...', body));

// 解决移动端300ms延迟和点击穿透问题
var FastClick = require('fastclick');
FastClick.attach(document.body);

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index').default);
app.model(require('./models/discover').default);
app.model(require('./models/play').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
