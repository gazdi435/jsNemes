type Video = {
    id :number,
    title :string,
    link :string,
    imageUrl :string
}

const ApiUrl :string = "https://eskuvo-anett.nemestamas.hu/api/youtube/"

let lista :Video[]= []

fetch(ApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    data.forEach((music:Video) => {
        let video :Video;
        console.log(music.title)
        video = {
            id : music.id,
            title : music.title,
            link : music.link,
            imageUrl : music.imageUrl
        }

        lista.push(video)
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


console.log(lista[0].title)