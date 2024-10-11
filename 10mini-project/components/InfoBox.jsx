import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    
    let coldImg = "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=2HCnfJ8Cpe1EF1pSW15UsUC3ZwpPhbkv7A30pisf_iw="
    let rainImg = "https://plus.unsplash.com/premium_photo-1671148804428-479b78611ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let hotImg = "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?a=1&b=1&s=612x612&w=0&k=20&c=pOpURENydDZZMKvr5BXEs2d-xv8_TaOu7TQ7M85jweo="

    return (
        <div className="InfoBox">
            <h2>Weather Info :</h2>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={info.humidity > 80 ? rainImg : info.temp > 20 ? hotImg : coldImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color='text.secondary' component="span">
                    <div>Temperature: {info.temp}&deg;C</div>
                    <div>Humidity: {info.humidity}</div>
                    <div>Min. Temperature: {info.minTemp}</div>
                    <div>Max. Temperature: {info.maxTemp}</div>
                    <p>This weather can be described as <i>{info.description}</i> and feels like <i>{info.feelsLike}&deg;C</i>.</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    );
}