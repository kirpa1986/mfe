import { mount as marketingMount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react'

const MarketingApp = () => {
    const ref = useRef(null);
    useEffect(()=> {
        marketingMount(ref.current);
    },)

    return <div ref={ref} />;

}

export default MarketingApp