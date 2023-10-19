import React from 'react';
import { Alert, Space, Spin } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Space>
      <Spin tip="加载中" size="small">
        <div className="content" />
      </Spin>
      <Spin tip="加载中">
        <div className="content" />
      </Spin>
      <Spin tip="加载中" size="large">
        <div className="content" />
      </Spin>
    </Space>

    <Spin tip="加载中g...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);

export default App;
