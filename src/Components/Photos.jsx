import React from 'react'

const Photos = () => {

    return(
        <>
        
        <div class="container">
        <div id="navbar"></div>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="margin: 10%">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100"
                    src="Pictures/People/Other/2018 Brno with Babajani-Feremi and Arya 20180503_194648.jpg"
                    alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"
                    src="Pictures/People/Other/2018 ICCN Crone Matsumoto Duffau & Kyoto Fellows.jpg" alt="Third slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="Pictures/People/Other/IMG_1038.JPG" alt="Third slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="Pictures/People/Other/PhotoGrid_1509662550890.jpg" alt="Third slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="Pictures/People/Other/SFN_2018.JPG" alt="Third slide"/>
            </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
        
        </>
    )

}
export default Photos