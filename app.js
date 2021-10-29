$("form").on("submit", async function(e){
    e.preventDefault();
    const query = $("input").val();
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: 
    {
        q: query,
        api_key: '7c46GY88xbtmTJCJ19eWTAzYkVA7dYb2'
    }} );
    console.log(res);
});




// async function getRandomDog(){
//     const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//     console.log(res.data);
//     const img = document.querySelector("#dog");
//     img.src = res.data.message;
// }

// async function getDogByBreed(breed){
//     try {
//         const url = `https://dog.ceo/api/breed/${breed}/images/random`
//         const res = await axios.get(url);
//         const img = document.querySelector("#dog");
//         img.src = res.data.message;
//     } catch (e) {
//         alert("Breed Not Found")
//         getRandomDog();
//     }
// }

// const form = document.querySelector("#searchForm");
// const input = document.querySelector("#search");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     getDogByBreed(input.value);
//     input.value = '';
// })