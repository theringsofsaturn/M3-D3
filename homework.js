const renderData = (data) => {
  const parent = document.querySelector(".album .row");
  parent.innerHTML = "";
  data.forEach((img) => {
    const card = `   <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
          <img src=""/>
           <div class="card-body">

             <div
               class="d-flex justify-content-between align-items-center"
             >
               <div class="btn-group">
                 <button
                   type="button"
                   class="btn btn-sm btn-outline-secondary"
                  onclick="showModal(event)"
                  data-toggle="modal" data-target="#exampleModal"
                 >
                   View
                 </button>
                 <button
                   type="button"
                   class="btn btn-sm btn-outline-secondary"
                   onclick="removeCard(event)"
                 >
                   Hide
                 </button>
               </div>
               <small class="text-muted"></small>
             </div>
           </div>
         </div>
       </div>`;
    parent.innerHTML += card;
  });
};

const searchImages = (query) => {
  fetch(`http://www.splashbase.co/api/v1/images/search?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderData(data.images);
    })
    .catch((err) => console.log(err));
};

searchImages("whatever");

window.onload = () => {
  const primaryBtn = document.querySelector(".load-images");
  const secondaryBtn = document.querySelector(".load-secondary-images");
  primaryBtn.addEventListener("click", () => {
    searchImages("whatever");
  });
  secondaryBtn.addEventListener("click", () => {
    searchImages("whatever");
  });
};
