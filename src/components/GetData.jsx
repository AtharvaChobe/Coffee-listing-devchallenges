import React, { useEffect, useState } from 'react'
import Card1 from './Card1';
import Card2 from './Card2';

const GetData = () => {

    const [container, setcontainer] = useState([]);
    const [showComponent, setshowComponent] = useState(true)

    const AllData = () => {

        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcontainer(data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        AllData();
    }, [])

    const click1 = () =>{
        setshowComponent(true)
        AllData();
        document.getElementById('btn1').style.backgroundColor="#6F757C"
        document.getElementById('btn2').style.backgroundColor="transparent"
    }
    const click2 = () =>{
        setshowComponent(false)
        AllData();
        document.getElementById('btn1').style.backgroundColor="transparent"
        document.getElementById('btn2').style.backgroundColor="#6F757C"
    }


    return (
        <>
            <div className='bg-black flex items-center justify-center flex-col w-9/12 gap-2 mt-12 p-8 rounded-lg'>
                <h1 className='text-cream'>Our Collection</h1>
                <p className='text-slate text-center w-3/4 md:w-1/2'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className='flex gap-3 mt-4'>
                    <button id='btn1' className='active:bg-slate text-white px-3 py-2 rounded-md' onClick={click1}>All Products</button>
                    <button id='btn2' className='active:bg-slate text-white px-3 py-2 rounded-md' onClick={click2}>Available Now</button>
                </div>
                {showComponent ? <Card1 container={container} /> : <Card2 container={container}/>}
                
            </div>
        </>
    )
}

export default GetData