import _ from 'lodash'
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import CenterInfo from "./components/CenterInfo"
import React from "react"
const deepai = require('deepai')

deepai.setApiKey('951ddf6c-c31a-4218-a93e-2e971d269816')

function App() {

  // couple of hard arrays for deepAI generator
  const styleArray = ["old-style-generator","renaissance-painting-generator","abstract-painting-generator","impressionism-painting-generator",
                      "surreal-graphics-generator","watercolor-architecture-generator"]
  const randomTextArray = ["great fisherman", "student", "flowers in a vase", "wave of despair", "ocean creature", "modern" , 
                            "future travel", "starry vista", "woman showering", "assorted fruit"]
  
  // STATES
  const [loading, setLoading] = React.useState(true);
  const [deepAIimageState, setDeepAIimageState] = React.useState({
    id: '',
    image:'',
    artist: 'DeepAI Image Generator',
  });
  const [metArtImageState, setMetArtImageState] = React.useState({
    id: '',
    image: '',
    artist: '',
    year: '',
    title: '',
  });
  const [metArtObjectIDsArrayState, setMetArtObjectIDsArrayState] = React.useState();
  const [bothImageStateArray, setBothImageStateArray] = React.useState([]);
  const [shuffleBothImageStateArray, setShuffleBothImageStateArray] = React.useState([]);




// function to grab 1 AI generated image
  const deepAIimageFunction = async () => {
    try{
      const deepAIimage = await deepai.callStandardApi(`${styleArray[randomArrayIndex(styleArray)]}`,{
        text: `${randomTextArray[randomArrayIndex(randomTextArray)]}`
      })

        setDeepAIimageState(deepAIimage)

    } catch(error){
      console.log(error)
    }
  }

  const fetchMetArtObjectIDs = async () => {
    try{
      const metArtObjectIDsPromise = await Promise.resolve(
          fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Paintings/?limit=1000`).then((res) => res.json()))  
          // console.log(metArtObjectIDsPromise);
          setMetArtObjectIDsArrayState(metArtObjectIDsPromise)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(metArtObjectIDsArrayState);

  // function to fetch 1 random art image
  const fetchMetArtImage = async () => {

    try{
      const metArtImagePromise = await Promise.resolve(
          fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomArtObjectID()}`).then((res) => res.json()))  
          console.log(metArtImagePromise);
          setMetArtImageState( prevVal => ({
            ...prevVal,
            id: metArtImagePromise.objectID,
            image: metArtImagePromise.primaryImage,
            artist: metArtImagePromise

          }))

    } catch (error) {
      console.log(error);
    }
  }

// couple of random number gen for specific usage
  function randomArrayIndex(array){
    return Math.floor(Math.random() * array.length)
  }
  function randomArtObjectID(){
    let randomIndexNumber = Math.floor(Math.random() * 1000)
    console.log(randomIndexNumber);
    console.log(metArtObjectIDsArrayState.objectIDs[randomIndexNumber]);
    return metArtObjectIDsArrayState.objectIDs[randomIndexNumber]
  }

  // function to add both state results to the both state
  function addAIartAndMetArtToBothState(){
    setBothImageStateArray( prevState =>{
      return [ 
      {metArtImageState},
      {deepAIimageState} 
    ]})
  }


  function shuffleArray(bothImageStateArrayProp) {
    let bothArray = _.shuffle(bothImageStateArrayProp)
    setShuffleBothImageStateArray(bothArray)
}

React.useEffect(() => {
  deepAIimageFunction();
  fetchMetArtObjectIDs()
}, []);

React.useEffect(() => {
  addAIartAndMetArtToBothState()
}, [deepAIimageState]);

React.useEffect(() => {
  if(metArtObjectIDsArrayState)
  fetchMetArtImage()
}, [metArtObjectIDsArrayState]);

React.useEffect(() => {
  shuffleArray(bothImageStateArray)
}, [bothImageStateArray]);

// if(loading) {
//   return <Loading />
// }


  return (
    <div className="mainContainer">
          <div className="content">
            <Nav />
              <CenterInfo 
                bothImageStateArray = {bothImageStateArray}
                shuffleBothImageStateArray = {shuffleBothImageStateArray}
                deepAIimageState = {deepAIimageState}
                deepAIimageFuntion = {deepAIimageFunction}
                metArtImageState = {metArtImageState}
                fetchMetArtImage = {fetchMetArtImage}
              />
            <Footer />
          </div>
    </div>
  );
}

export default App;
