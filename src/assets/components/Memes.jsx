import { useState,useEffect } from "react"
const Memes = ()=>{
    const [memes,setMemes] = useState({})
    const [formData,setFormData] = useState(
        {
            topText:"",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        })
    const handleChange = (e)=>{
      const {name,value} = e.target
      setFormData((prevState)=>{
        return {
            ...prevState,
            [name]:value
        }
      })

    }
    const handleClick = ()=>{
        
        let randNumber = Math.floor(Math.random()*memes.length)
        let imgUrl = memes[randNumber].url
        console.log(randNumber)
        console.log("memes length:",memes.length)
        setFormData((prevState)=>{
            return {
                ...prevState,
                randomImage:imgUrl
            }
        })
        console.log(formData)
    }
    useEffect(()=>{
        console.log("effect fn")
        const getData = async () =>
        {
            const res  = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemes(data.data.memes)
        } 
        getData()
    },[])
    return(
        <div className="grid-container">
            <input
                className="input--text item1"
                placeholder="Text top"
                type="text" 
                name="topText" 
                id="topText"
                value={formData.topText}
                onChange={handleChange}
            />
            <input 
                className="input--text item2"
                placeholder="Text bottom"
                type="text" 
                name="bottomText" 
                id="bottomText"
                value={formData.bottomText}
                onChange={handleChange}
            />
            <button className="btn item3" onClick={handleClick}>
                Get a new memes image 
            </button>
           <div className="img--container"> 
            <img src={formData.randomImage} alt=""  className="item4 memes-img"/>
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </div>
    )
}
export default Memes