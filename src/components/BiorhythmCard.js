import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

function BiorythmCard({ targetDate }) {
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{targetDate}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Physical: ???</p>
                <p>Emotional: ???</p>
                <p>Intellectual: ???</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorythmCard;