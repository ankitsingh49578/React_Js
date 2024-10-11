export default function Image({img}){
    return (
        <div>
            <img src={img} alt="picture.jpg" 
                width="150px" height="50px"
                className="m-auto mix-blend-multiply mt-[-30px] mb-1"
            />
        </div>
    );
}