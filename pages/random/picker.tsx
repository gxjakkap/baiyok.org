import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Loading from '../../components/loading'


const Picker: NextPage = () => {
    const [items, setItems] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [answerVisible, setAnswerVisibility] = useState(false)
    const [answerTextVisible, setAnswerTextVisibility] = useState(false)

    const handleitemsChange = (event: any) =>{
        setItems(event.target.value)
    }


    const getRandomNumber = async (min: Number, max: Number) => {
        const rs = await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
        const rst = await rs.text()
        console.log(rs)
        return parseInt(rst)
    }

    const onButtonClick = () => {
        setAnswerVisibility(true)
        setLoading(true)
        setAnswerTextVisibility(false)
        const rawInput = items
        if (!rawInput || !rawInput.includes(',')) {
            alert('Input something!')
            return
        }
        const itemsArray = rawInput.split(',')
        getRandomNumber(0, itemsArray.length-1)
            .then(picked => {
                setLoading(false)
                setAnswerVisibility(true)
                setAnswerTextVisibility(true)
                setResult(itemsArray[picked])
            })
        
    }
    
    return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="Sriwataporn Kongdam" />
            <title>Picker - Baiyok/Random</title>
        </Head>
        <div className='flex h-screen text-center text-bg-dark'>
            <div className="cover-container flex w-full h-full p-6 mx-auto flex-col">
                <Header />
                <main className="px-3">
                    <h1 className="mb-4">Item Picker</h1>
                    <div className="relative mt-[50px]">
                        <textarea className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-[100px]" id="items" value={items} onChange={handleitemsChange}></textarea>
                        <label className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="items">Items seperated by comma</label>
                    </div>
                    
                    <div style={{height: '10px'}}></div>
                    <button className="btn bg-blue-700 hover:bg-blue-700 border-transparent px-5 p mt-3" onClick={() => {onButtonClick()}}>Pick!</button>
                    {answerVisible &&
                        <div>
                            {loading ? <Loading /> : <></>}
                            {answerTextVisible ? <h2 className='mt-5'>{result}</h2> : <></>}
                        </div>
                    }
                </main>
                <Footer/>
            </div>
        </div>
    </>
    )
}

export default Picker