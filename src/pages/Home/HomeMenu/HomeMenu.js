import React, { useState } from 'react'
import { Tabs, Radio, Space } from 'antd';

export default function HomeMenu() {
    const { TabPane } = Tabs;

    return (
        <>
            <Tabs tabPosition={'left'}>
                <TabPane tab={<img src='http://picsum.photos/200' className='rounded-full' width='50'></img>} key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab={<img src='http://picsum.photos/200' className='rounded-full' width='50'></img>} key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab={<img src='http://picsum.photos/200' className='rounded-full' width='50'></img>} key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </>
    )
}
