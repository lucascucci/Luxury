



const Carrousel = () => {


    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/434e8a5f-0542-4817-ae77-998bc013fa2b___71ecba17bef78d77a36cf4398452d493.jpg" class="d-block w-100" alt="imagen"/>
                            <div class="carousel-caption d-none d-md-block">
                                
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/4ef491ba-915b-4528-92ba-4e6b9f1fa0e3___f3cfb109d8fdaac3737ebded84dfcd82.jpg" class="d-block w-100" alt="imagen"/>
                            <div class="carousel-caption d-none d-md-block">
                                
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7f849d-7eef-4d1f-9dc8-3ae50a794755___c291081280fbf7ec52a6cd5d591d8330.jpg" class="d-block w-100" alt="imagen"/>
                            <div class="carousel-caption d-none d-md-block">
                                
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}


export default Carrousel;

