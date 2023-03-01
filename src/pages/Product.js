import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import "../styles/Card.css"
export default function Product() {
    const [product, setProduct] = useState([])

    const loadData = async () => {
        let response = await fetch("http://localhost:3000/getProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json()
        console.log(response.Data);
        setProduct(response.Data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <div className='shop'>
                <div className="shopTitle">
                    <h1>Products Offered:</h1>
                </div>
                <div className='products'>
                    {
                        product !== []
                            ? product.map((Data) => {
                                return (
                                    <div>
                                        <Card image={Data.img}
                                            price={Data.price}
                                            productName={Data.productName}
                                        ></Card>
                                    </div>
                                )
                            })
                            : <div>""""</div>
                    }
                </div>
            </div>
        </>
    )
}
