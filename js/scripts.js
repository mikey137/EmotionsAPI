/*!
* Start Bootstrap - Grayscale v7.0.2 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const moods = [
    {
    name: 'afraid',
    sysnonyms: ['apprehensive', 'stressed', 'worried', 'inadequate', 'confused', 'threatened', 'helpless']
},

{
    name: 'apprehensive',
    sysnonyms: ['timid', 'nervous']
},
{
    name: 'stressed',
    sysnonyms: ['overwhelmed', 'desperate']
},
{
    name: 'worried',
    sysnonyms: ['anxious', 'alarmed']
},
{
    name: 'inadequate',
    sysnonyms: ['inferior', 'insecure']
},
{
    name: 'confused',
    sysnonyms: ['bewildered', 'perturbed']
},
{
    name: 'threatened',
    sysnonyms: ['intimidated', 'exposed']
},
{
    name: 'helpless',
    sysnonyms: ['powerless', 'out of control']
},
{
    name: 'embarrassed',
    sysnonyms: ['disrespected', 'worthless', 'guilty', 'sheepish', 'ashamed', 'inferior']
},
{
    name: 'disrespected',
    sysnonyms: ['humliliated', 'ridiculed']
},
{
    name: 'worthless',
    sysnonyms: ['insignificant', 'inadequate']
},
{
    name: 'guilty',
    sysnonyms: ['remorseful', 'repentant']
},
{
    name: 'sheepish',
    sysnonyms: ['contrite', 'abashed']
},
{
    name: 'ashamed',
    sysnonyms: ['mortified', 'humiliated']
},
{
    name: 'inferior',
    sysnonyms: ['weak', 'small']
},
{
    name: 'angry',
    sysnonyms: ['offended', 'indignant', 'dismayed', 'bitter', 'frustrated', 'agressive', 'harassed','bored','rushed']
},
{
    name: 'offended',
    sysnonyms: ['insulted', 'mocked']
},
{
    name: 'indignant',
    sysnonyms: ['violated', 'outraged']
},
{
    name: 'dismayed',
    sysnonyms: ['betrayed', 'let down']
},
{
    name: 'bitter',
    sysnonyms: ['resentful', 'jealous']
},
{
    name: 'frustrated',
    sysnonyms: ['annoyed', 'infuriated']
},
{
    name: 'agressive',
    sysnonyms: ['hostile', 'belligerent']
},
{
    name: 'harassed',
    sysnonyms: ['provoked', 'persecuted']
},
{
    name: 'bored',
    sysnonyms: ['indifferent', 'apathetic']
},
{
    name: 'rushed',
    sysnonyms: ['pushed', 'pressured']
},
{
    name: 'alone',
    sysnonyms: ['distant', 'lonely', 'excluded', 'fragile', 'abandoned', 'desolate']
},
{
    name: 'distant',
    sysnonyms: ['withdrawn', 'detached']
},
{
    name: 'lonely',
    sysnonyms: ['isolated', 'forlorn']
},
{
    name: 'excluded',
    sysnonyms: ['deserted', 'forsaken']
},
{
    name: 'fragile',
    sysnonyms: ['vulnerable', 'exposed']
},
{
    name: 'abandoned',
    sysnonyms: ['rejected', 'friendless']
},
{
    name: 'desolate',
    sysnonyms: ['bleak', 'destroyed']
},
{
    name: 'dislike',
    sysnonyms: ['dismissive', 'disgusted', 'suspicious', 'appalled', 'repelled', 'skeptical']
},
{
    name: 'dismissive',
    sysnonyms: ['contemptuous', 'disdainful']
},
{
    name: 'disgusted',
    sysnonyms: ['revolted', 'nauseated']
},
{
    name: 'suspicious',
    sysnonyms: ['disturbed', 'scandalized']
},
{
    name: 'appalled',
    sysnonyms: ['sickened', 'aghast']
},
{
    name: 'repelled',
    sysnonyms: ['repulsed', 'loathe']
},
{
    name: 'skeptical',
    sysnonyms: ['critical', 'disapproving']
},
{
    name: 'sad',
    sysnonyms: ['depressed', 'hurt', 'berett', 'melancholy', 'subdued', 'aggrieved', 'discouraged']
},
{
    name: 'depressed',
    sysnonyms: ['bleak', 'despondent']
},
{
    name: 'hurt',
    sysnonyms: ['deflated', 'injured']
},
{
    name: 'berett',
    sysnonyms: ['disconsolate', 'inconsolable']
},
{
    name: 'melancholy',
    sysnonyms: ['forlorn', 'sorrowful']
},
{
    name: 'subdued',
    sysnonyms: ['gloomy', 'sombre']
},
{
    name: 'aggrieved',
    sysnonyms: ['agonized', 'desolate']
},
{
    name: 'discouraged',
    sysnonyms: ['small', 'broken']
},

]


function backToParentMood(){
    let childMood = $('#h1ID').text()
    let primaryMoods = ['sad','dislike','alone','angry','embarrassed','afraid']

    if(primaryMoods.includes(childMood) === true){
        window.location.href = "negativeEmotions.html"
    }else{
        let parentMood = findParentMood(childMood)
        getWord(parentMood)
    }

}

function findParentMood(childMood){
    
    
    for(let i = 0; i < moods.length; i++){
        if(moods[i].sysnonyms.includes(childMood)){
            let parentMood = moods[i].name
            return parentMood
           }
       }
   } 
   
function getMoodFromButtonText(id){
    let word = document.getElementById(id).textContent
    console.log(word)
    getWord(word)
}

function getWord(word){

    var uniquePointer = 0

    changeVideoButtonText()

    let mood = moods.filter(i=>i.name===word)[0]
    console.log(mood)
    if(mood !== undefined){
        let sysnonyms = mood.sysnonyms
        $('#sysnonyms_container').empty()

    
        sysnonyms.forEach(sysnonym=>{
            let link = document.createElement('a')
            link.id = "link_"+ uniquePointer
            uniquePointer ++
            let linkText = document.createTextNode(sysnonym)

            

            link.appendChild(linkText)
            link.title = sysnonym
            $(link).addClass("btn btn-primary")
            $(link).click(()=>getMoodFromButtonText(link.id))
            $('#sysnonyms_container').append($(link))

       
        })
    }
    

    let config ={
        headers: {
            authorization: '563492ad6f917000010000015d202598eb8f4404ac259fcc54e9d8a3',
        }
    }
    
    const wordVideo = axios.get('https://api.pexels.com/videos/search?query='+word,config)

    const wordDefinition = axios.get('https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+word+'?key=aabb619f-b178-480a-bd80-42c4b051d156') 

    const wordSynonyms = axios.get('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'+word+'?key=2e7a273b-c31c-45e6-b607-c0825b6a2c60')

    const wordMainImage = axios.get('https://api.unsplash.com/search/photos?page=1&query='+word+'&client_id=KspA9IZUlau34NBaYg6xwwSn6WcMclJ8YR02VpupbSM')

    Promise.all([wordDefinition, wordSynonyms, wordMainImage, wordVideo])
    .then((responses)=>{
      console.log(responses)
      let definition = responses[0].data[0].shortdef[0]
      addDefinition(definition)

      
      
      
      let isVideoOn 
      if(responses[2].data.total === 0 && responses[3].data.total_results !== 0){
        switchToVideoAll(responses)
      }else{
          isVideoOn = false
          changeBackgroundImageNotFound(responses)
      }    
      if(responses[3].data.total_results === 0){
          makeVideoButtonInvisable()
      }else{
        makeVideoButtonVisable()
      }
       
      $("#video_toggle").click((e)=>{
        
        if(isVideoOn || responses[3].data.total_results === 0){
            isVideoOn = false
            changeBackgroundImageNotFound(responses)
            $('#video_toggle').text('Show Video')
            
        }else{
            isVideoOn = true
            switchToVideoAll(responses)
            
        }
      })

      
      
    }) 
  
    .catch((error)=>{
      console.log(error)
    })

    changeH1(word)

    function switchToVideoAll(responses){
            switchToVideoBackground(responses)
            hideBackgroundImg()
            $('#video_toggle').text('Stop Video')
            
    }

    function switchToVideoBackground(responses){
        if(responses[3].data.total_results == 0){
            let imgLocation = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
            changeBackground(imgLocation) 
        }else{
        let moodVideo = responses[3].data.videos[0].video_files[0].link
        $("#video")[0].src = moodVideo
        $("#video")[0].load()
        $("#video")[0].play()
        }
        

    }



}

  function changeH1(newEmotion){
      typePhrases(newEmotion, document.getElementById("h1ID"))

  }

  function addDefinition(newDefinition){
      document.getElementById("h2ID").innerHTML = newDefinition
  }

  function changeButtons(a,b,c,d,e,f){
    document.getElementById("btn1").innerHTML = a
    document.getElementById("btn2").innerHTML = b
    document.getElementById("btn3").innerHTML = c
    document.getElementById("btn4").innerHTML = d
    document.getElementById("btn5").innerHTML = e
    document.getElementById("btn6").innerHTML = f
  }

  function changeBackgroundImageNotFound(responses){
    if(responses[2].data.total == 0){
        
        let imgLocation = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
        
        changeBackground(imgLocation)
    }else{
      let backgroundImg = responses[2].data.results[0].urls.regular
      changeBackground(backgroundImg)
      
    
    }
  }

  function changeBackground(newImg){

    
    
      let emotionImg = document.getElementById('negative')
        emotionImg.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('+newImg+')'
        emotionImg.style.backgroundPosition = "center"
        emotionImg.style.backgroundRepeat = "no-repeat"
        emotionImg.style.backgroundSize = "cover"
  }

  function hideBackgroundImg(){
    let emotionImg = document.getElementById('negative')
    emotionImg.style.background = '0'
  }

  function makeVideoButtonVisable(){
      $('#video_toggle').css("visibility","visible")

  }

  function makeVideoButtonInvisable(){
    $('#video_toggle').css("visibility","hidden")

}

  function changeVideoButtonText(){
      if($('#video_toggle').text() == 'Stop Video'){
          $('#video_toggle').text('Show Video')
      }
  }

  



function typePhrases(phrase, textDisplay){
    let i=0
    let currentPhrase = []
    
    

    function incrementPhrase(){
        if(i < phrase.length){
            currentPhrase.push(phrase[i])
            textDisplay.innerHTML = currentPhrase.join('')
            i++
            
        }
        setTimeout(incrementPhrase, 200)  
    }
    
    incrementPhrase()
    
}

typePhrases('Hello, how are you feeling?', document.getElementById('typing'))










  

  
  