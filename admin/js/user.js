function adds(){
    var name = document.getElementById('name').value
    var album = document.getElementById('album').value
    var singer = document.getElementById('singer').value
    var kindOfMusic = document.getElementById('kindOfMusic').value


    document.querySelector('#data_music').insertAdjacentHTML(
        'afterbegin',
        `<div class="table_items1">${name}</div>
        <div class="table_items1 table_items_border">${album}</div>
        <div class="table_items1 table_items_border">${singer}</div>
        <div class="table_items1 table_items_border">${kindOfMusic}</div>`
    )
}

function refresh(){
    document.location.reload()
}

