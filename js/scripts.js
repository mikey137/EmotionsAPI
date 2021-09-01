/*!
* Start Bootstrap - Grayscale v7.0.2 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/

/* eslint no-undef: 0 */
window.addEventListener('DOMContentLoaded', () => {
// Navbar shrink function
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    // eslint-disable-next-line no-new
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link'),
  );
  // eslint-disable-next-line array-callback-return
  responsiveNavItems.map((responsiveNavItem) => {
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
    sysnonyms: ['apprehensive', 'stressed', 'worried', 'inadequate', 'confused', 'threatened', 'helpless'],
  },

  {
    name: 'apprehensive',
    sysnonyms: ['timid', 'nervous'],
  },
  {
    name: 'stressed',
    sysnonyms: ['overwhelmed', 'desperate'],
  },
  {
    name: 'worried',
    sysnonyms: ['anxious', 'alarmed'],
  },
  {
    name: 'inadequate',
    sysnonyms: ['inferior', 'insecure'],
  },
  {
    name: 'confused',
    sysnonyms: ['bewildered', 'perturbed'],
  },
  {
    name: 'threatened',
    sysnonyms: ['intimidated', 'exposed'],
  },
  {
    name: 'helpless',
    sysnonyms: ['powerless', 'out of control'],
  },
  {
    name: 'embarrassed',
    sysnonyms: ['disrespected', 'worthless', 'guilty', 'sheepish', 'ashamed', 'inferior'],
  },
  {
    name: 'disrespected',
    sysnonyms: ['humliliated', 'ridiculed'],
  },
  {
    name: 'worthless',
    sysnonyms: ['insignificant', 'inadequate'],
  },
  {
    name: 'guilty',
    sysnonyms: ['remorseful', 'repentant'],
  },
  {
    name: 'sheepish',
    sysnonyms: ['contrite', 'abashed'],
  },
  {
    name: 'ashamed',
    sysnonyms: ['mortified', 'humiliated'],
  },
  {
    name: 'inferior',
    sysnonyms: ['weak', 'small'],
  },
  {
    name: 'angry',
    sysnonyms: ['offended', 'indignant', 'dismayed', 'bitter', 'frustrated', 'agressive', 'harassed', 'bored', 'rushed'],
  },
  {
    name: 'offended',
    sysnonyms: ['insulted', 'mocked'],
  },
  {
    name: 'indignant',
    sysnonyms: ['violated', 'outraged'],
  },
  {
    name: 'dismayed',
    sysnonyms: ['betrayed', 'let down'],
  },
  {
    name: 'bitter',
    sysnonyms: ['resentful', 'jealous'],
  },
  {
    name: 'frustrated',
    sysnonyms: ['annoyed', 'infuriated'],
  },
  {
    name: 'agressive',
    sysnonyms: ['hostile', 'belligerent'],
  },
  {
    name: 'harassed',
    sysnonyms: ['provoked', 'persecuted'],
  },
  {
    name: 'bored',
    sysnonyms: ['indifferent', 'apathetic'],
  },
  {
    name: 'rushed',
    sysnonyms: ['pushed', 'pressured'],
  },
  {
    name: 'alone',
    sysnonyms: ['distant', 'lonely', 'excluded', 'fragile', 'abandoned', 'desolate'],
  },
  {
    name: 'distant',
    sysnonyms: ['withdrawn', 'detached'],
  },
  {
    name: 'lonely',
    sysnonyms: ['isolated', 'forlorn'],
  },
  {
    name: 'excluded',
    sysnonyms: ['deserted', 'forsaken'],
  },
  {
    name: 'fragile',
    sysnonyms: ['vulnerable', 'exposed'],
  },
  {
    name: 'abandoned',
    sysnonyms: ['rejected', 'friendless'],
  },
  {
    name: 'desolate',
    sysnonyms: ['bleak', 'destroyed'],
  },
  {
    name: 'dislike',
    sysnonyms: ['dismissive', 'disgusted', 'suspicious', 'appalled', 'repelled', 'skeptical'],
  },
  {
    name: 'dismissive',
    sysnonyms: ['contemptuous', 'disdainful'],
  },
  {
    name: 'disgusted',
    sysnonyms: ['revolted', 'nauseated'],
  },
  {
    name: 'suspicious',
    sysnonyms: ['disturbed', 'scandalized'],
  },
  {
    name: 'appalled',
    sysnonyms: ['sickened', 'aghast'],
  },
  {
    name: 'repelled',
    sysnonyms: ['repulsed', 'loathe'],
  },
  {
    name: 'skeptical',
    sysnonyms: ['critical', 'disapproving'],
  },
  {
    name: 'sad',
    sysnonyms: ['depressed', 'hurt', 'berett', 'melancholy', 'subdued', 'aggrieved', 'discouraged'],
  },
  {
    name: 'depressed',
    sysnonyms: ['bleak', 'despondent'],
  },
  {
    name: 'hurt',
    sysnonyms: ['deflated', 'injured'],
  },
  {
    name: 'berett',
    sysnonyms: ['disconsolate', 'inconsolable'],
  },
  {
    name: 'melancholy',
    sysnonyms: ['forlorn', 'sorrowful'],
  },
  {
    name: 'subdued',
    sysnonyms: ['gloomy', 'sombre'],
  },
  {
    name: 'aggrieved',
    sysnonyms: ['agonized', 'desolate'],
  },
  {
    name: 'discouraged',
    sysnonyms: ['small', 'broken'],
  },

];

// eslint-disable-next-line no-unused-vars
function displayJournal() {
  $('#journal').css('visibility', 'visible');
  $('.text-center').css('visibility', 'hidden');
  $('#video_toggle').css('visibility', 'hidden');
  $('#journal_toggle').css('visibility', 'hidden');
}

function closeJournal() {
  $('#journal').css('visibility', 'hidden');
  $('.text-center').css('visibility', 'visible');
  $('#video_toggle').css('visibility', 'visible');
  $('#journal_toggle').css('visibility', 'visible');
}

document.getElementById('close_btn').addEventListener('click', closeJournal);

// eslint-disable-next-line no-unused-vars
function backToParentMood() {
  const childMood = $('#h1ID').text();
  const primaryMoods = ['sad', 'dislike', 'alone', 'angry', 'embarrassed', 'afraid'];

  if (primaryMoods.includes(childMood) === true) {
    window.location.href = 'negativeEmotions.html';
  } else {
    // eslint-disable-next-line no-use-before-define
    const parentMood = findParentMood(childMood);
    // eslint-disable-next-line no-use-before-define
    generateEmotionPage(parentMood);
  }
}

// eslint-disable-next-line consistent-return
function findParentMood(childMood) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moods.length; i++) {
    if (moods[i].sysnonyms.includes(childMood)) {
      const parentMood = moods[i].name;
      return parentMood;
    }
  }
}

function makeJournalButtonVisable() {
  $('#journal_toggle').css('visibility', 'visible');
}

function typePhrases(phrase, textDisplay, speed) {
  let i = 0;
  const currentPhrase = [];

  function incrementPhrase() {
    if (i < phrase.length) {
      currentPhrase.push(phrase[i]);
      // eslint-disable-next-line no-param-reassign
      textDisplay.innerHTML = currentPhrase.join('');
      i += 1;
    }
    setTimeout(incrementPhrase, speed);
  }

  incrementPhrase();
}

function changeEmotionInH1(newEmotion) {
  typePhrases(newEmotion, document.getElementById('h1ID'), 200);
}

function changeVideoButtonText() {
  if ($('#video_toggle').text() === 'Stop Video') {
    $('#video_toggle').text('Show Video');
  }
}

function getMoodFromButtonText(id) {
  const word = document.getElementById(id).textContent;
  // eslint-disable-next-line no-use-before-define
  generateEmotionPage(word);
}

function changeButtonTextToSysnonyms(word) {
  let uniquePointer = 0;
  const mood = moods.filter((i) => i.name === word)[0];

  if (mood !== undefined) {
    const { sysnonyms } = mood;
    $('#sysnonyms_container').empty();

    sysnonyms.forEach((sysnonym) => {
      const link = document.createElement('a');
      link.id = `link_${uniquePointer}`;
      uniquePointer += 1;
      const linkText = document.createTextNode(sysnonym);

      link.appendChild(linkText);
      link.title = sysnonym;
      $(link).addClass('btn btn-primary');
      $(link).click(() => getMoodFromButtonText(link.id));
      $('#sysnonyms_container').append($(link));
    });
  }
}

function generateEmotionPage(word) {
  $('#typing').empty();

  makeJournalButtonVisable();

  changeEmotionInH1(word);

  changeVideoButtonText();

  changeButtonTextToSysnonyms(word);

  // eslint-disable-next-line no-use-before-define
  GetResponsesAndDisplay(word);
}

function addDefinition(newDefinition) {
  document.getElementById('h2ID').innerHTML = newDefinition;
}

function changeBackground(newImg) {
  const emotionImg = document.getElementById('negative');
  emotionImg.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${newImg})`;
  emotionImg.style.backgroundPosition = 'center';
  emotionImg.style.backgroundRepeat = 'no-repeat';
  emotionImg.style.backgroundSize = 'cover';
}

function switchToVideoBackground(responses) {
  if (responses[3].data.total_results === 0) {
    const imgLocation = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';
    changeBackground(imgLocation);
  } else {
    const moodVideo = responses[3].data.videos[0].video_files[0].link;
    $('#video')[0].src = moodVideo;
    $('#video')[0].load();
    $('#video')[0].play();
  }
}

function hideBackgroundImg() {
  const emotionImg = document.getElementById('negative');
  emotionImg.style.background = '0';
}

function switchToVideoAll(responses) {
  switchToVideoBackground(responses);
  hideBackgroundImg();
  $('#video_toggle').text('Stop Video');
}

function changeBackgroundImageNotFound(responses) {
  if (responses[2].data.total === 0) {
    const imgLocation = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

    changeBackground(imgLocation);
  } else {
    const backgroundImg = responses[2].data.results[0].urls.regular;
    changeBackground(backgroundImg);
  }
}

function makeVideoButtonVisable() {
  $('#video_toggle').css('visibility', 'visible');
}

function makeVideoButtonInvisable() {
  $('#video_toggle').css('visibility', 'hidden');
}

function GetResponsesAndDisplay(word) {
  const config = {
    headers: {
      authorization: '563492ad6f917000010000015d202598eb8f4404ac259fcc54e9d8a3',
    },
  };

  const wordVideo = axios.get(`https://api.pexels.com/videos/search?query=${word}`, config);

  const wordDefinition = axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=aabb619f-b178-480a-bd80-42c4b051d156`);

  const wordSynonyms = axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=2e7a273b-c31c-45e6-b607-c0825b6a2c60`);

  const wordMainImage = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=KspA9IZUlau34NBaYg6xwwSn6WcMclJ8YR02VpupbSM`);

  Promise.all([wordDefinition, wordSynonyms, wordMainImage, wordVideo])
    .then((responses) => {
      const definition = responses[0].data[0].shortdef[0];
      addDefinition(definition);

      let isVideoOn;
      if (responses[2].data.total === 0 && responses[3].data.total_results !== 0) {
        switchToVideoAll(responses);
      } else {
        isVideoOn = false;
        changeBackgroundImageNotFound(responses);
      }
      if (responses[3].data.total_results === 0) {
        makeVideoButtonInvisable();
      } else {
        makeVideoButtonVisable();
      }

      $('#video_toggle').click(() => {
        if (isVideoOn || responses[3].data.total_results === 0) {
          isVideoOn = false;
          changeBackgroundImageNotFound(responses);
          $('#video_toggle').text('Show Video');
        } else {
          isVideoOn = true;
          switchToVideoAll(responses);
        }
      });
    })

    .catch(() => {
    });
}

function generateJournalPrompt() {
  const display = document.getElementById('prompt_display');

  const prompts = ["How well does the image represent the emotion? Why is/isn't it a good representation?", "How well does the video resprent the emotion? Why is/isn't it a good representation?", 'Describe what happened the last time you felt this emotion?', 'What does your body feel like when you experience this emotion?'];

  const randomPromptIndex = Math.floor(Math.random() * prompts.length);

  const randomPrompt = prompts[randomPromptIndex];

  typePhrases(randomPrompt, display, 150);
}

document.getElementById('prompt_btn').addEventListener('click', generateJournalPrompt);

typePhrases('Hello, how are you feeling?', document.getElementById('typing'), 75);
