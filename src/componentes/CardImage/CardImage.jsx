import { Link } from "react-router-dom";


const CardImage = () => {
    return (
        <>
        <div class="card-group">
            <div class="card">
                <Link to={`/Relojes`}><img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/988d12ba-f982-476e-a8f0-3743c99f695f___15f6714c087ead0b65e482a785afe668.jpg" class="card-img-top" alt="foto"/>
                </Link>
            </div>
            <div class="card">
                <Link to={`/Tecno`}><img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/35b0906e-c2df-461c-bbec-e162b0aa2993___f7e0c1ab0a4efe569a921cec5ef1cccf.jpg" class="card-img-top" alt="foto"/>
                </Link>
            </div>
            <div class="card">
                <Link to={`/Joyas`}><img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/0275f7c5-2ac0-4f52-ab12-c9a37e94ab13___7b45e2c1841a98b8aa6f7205fdee5975.jpg" class="card-img-top" alt="foto"/>
                </Link>
            </div>
        </div>
            </>
    )
}



export default CardImage;