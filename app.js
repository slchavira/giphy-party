$("#submit-btn").on("click", async function(e){
    e.preventDefault();
    const query = $("input").val();
    $("#search").val('');
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: 
    {
        q: query,
        api_key: '7c46GY88xbtmTJCJ19eWTAzYkVA7dYb2'
    }} );
    // console.log(res);
    addGif(res.data);
});

// Create function that takes repsonse, generates a random index, 
// creates element, and adds to page
function addGif(data){
    let idx = Math.floor(Math.random() * data.data.length);
    let newDiv = $("<div>", { class: "col-md-4 mb-4" });
    let newGif = $("<img>", { src: data.data[idx].images.original.url, class: "w-100"});
    newDiv.append(newGif);
    $("#gifsGoHere").append(newDiv);
    console.log(data);
}

// add event listener to remove all images from page
$("#remove").on("click", function(e){
    console.log(e.target.id);
    if (e.target.id === 'remove') {
        $("#gifsGoHere").empty();
        console.log("Emptied");
    }
});