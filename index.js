import 'react-html5video/dist/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { DefaultPlayer as Video } from 'react-html5video';
import { student } from './data';
import './index.less';

function App() {  
    const children = student.children.map((item, i) => (
      <Col md={12} xs={24} key={i.toString()} className="card">       
        <Video
          loop
          muted
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}            
          key={"video"+ i.toString()}
        >
          <source src={item.src} />
        </Video>
        <p>{item.name}</p>
      </Col>  
    ));
    
  return (    
    <div className="page-wrapper">
      <div className="page">
        <h1>学生的作品</h1>
        <Row>{children}</Row>       
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
