import React, { useEffect, useState } from 'react'
import { Empty, Card, Divider } from 'antd';
import axios from 'axios'

export default () => {
    const [benefits, setBenefits] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/benefits').then(({ data: resp }) => {
            setBenefits(resp)
            console.log(resp);
        }).catch(() => setBenefits([]))
    }, [axios])

    return benefits.length > 0 ?
        benefits.map(({ title, description, id }) => (
            <>
                <Card title={title} key={id} >
                    <p>{description}</p>
                </Card>
                <Divider /></>
        ))
        : <Empty></Empty>
}