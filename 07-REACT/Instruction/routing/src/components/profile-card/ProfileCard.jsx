import "./ProfileCard.scss";
import ProfileCardImage from "../../assets/img/profile-card.jpg";

const ProfileCard = (props) => {
    const imgSource = props.imgUrl || ProfileCardImage;

    const profileCardStyle = {
        backgroundImage: `url(${imgSource})`,
    };

   // console.log(props);

    return (
        <div className="profile-card-container">
            <div className="profile-card-header" style={profileCardStyle}></div>
            <div className="profile-card-content">
                <div
                    className="profile-card-avatar"
                    style={profileCardStyle}></div>
                <h3>{props.title}</h3>
                <h5>{props.location}</h5>
                <div className="profile-card-stats">
                    {props.statistics &&
                        props.statistics.map((stat, index) => (
                            <div
                                key={index + 1}
                                className="profile-card-stat-info">
                                <p>{stat.value}</p>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
