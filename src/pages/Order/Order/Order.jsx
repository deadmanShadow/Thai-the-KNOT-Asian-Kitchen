import { useState } from 'react';
import orderCvr from '../../../assets/shop/banner2.jpg';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    return (
        <div>
            <Helmet>
                <title>KNOT | ORDER</title>
            </Helmet>
            <Cover img={orderCvr} title="Order Food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="mt-2">
                    {categories.map((cat, index) => (
                        <Tab key={index}>{cat}</Tab>
                    ))}
                </TabList>
                {categories.map((cat, index) => (
                    <TabPanel key={index}>
                        <OrderTab items={menu.filter(item => item.category === cat)} />
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Order;
