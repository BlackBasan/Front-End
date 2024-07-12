import { Container } from "react-bootstrap";
import ProfileCard from "../../components/profile-card/ProfileCard";
import profileCardData from "../../data/profile-card.json";

const ProfileCardPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">PROFILE CARD</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ProfileCard
                    title="Walker"
                    location="Nashville, TN"
                    statistics={[
                        {
                            label: "Shot",
                            value: "14",
                        },
                        {
                            label: "Followers",
                            value: "300",
                        },
                        {
                            label: "Following",
                            value: "421",
                        },
                    ]}
                />
                <ProfileCard {...profileCardData} />
            </div>
        </Container>
    );
};

export default ProfileCardPage;
