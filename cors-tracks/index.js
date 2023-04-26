const container = document.getElementById('container');

const corsProxy = 'https://corsproxy.io/?';
const apiUrl = 'https://openwhyd.org/hot?format=json';

const fetchData = async () => {
  try {
    const response = await fetch(corsProxy + apiUrl);
    console.log(response)
    const data = await response.json();
    console.log(data)
    //console.log(data.tracks);
    const tracks = data.tracks;
    //console.log(tracks);
    console.log(typeof tracks)
    return tracks;
  } catch (error) {
    console.error('Error message',error);
  }
};

const trackList = document.createElement('ul');
container.appendChild(trackList);

const renderTracks = (tracks) => {
  tracks.forEach((track) => {
    const trackListElement = `
     <li>
     <a href='https://youtube.com/watch?v=${track.eId.slice(4)}' target="_blank">
     ${track.name}</a>
     </li>
    `;
    trackList.insertAdjacentHTML('beforeend', trackListElement);
  });
};

console.log(fetchData())
fetchData()
  .then((tracks) => renderTracks(tracks))
  .catch((error) => console.error(error))
  .finally(() =>console.log('Aufgabe erledigt'))



// andere weg

// async function fetchData() {
//   const container = document.querySelector('#container');
//   const url = 'https://corsproxy.io/?' + encodeURIComponent('https://openwhyd.org/hot?format=json');
//   const posts = await fetch(url);
//   const result = await posts.json();

//   result.tracks.forEach((track) => {
//     let li = document.createElement('li'),
//       anchor = document.createElement('a'),
//       trackId = `https://youtube.com/watch?v=${track.eId.substring(4)}`;

//     anchor.textContent = track.name;
//     anchor.setAttribute('target', '_blank');
//     anchor.href = `${trackId}`;

//     li.appendChild(anchor);
//     container.appendChild(li);
//   });
// }

// fetchData();