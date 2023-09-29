import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorythms } from "../lib/biorythms";
import BiorythmChart from "./BiorythmChart";

function formatDate(isoString) {
    const day = dayjs(isoString)
    return day.format('D MMMM YYYY')
}

function BiorythmCard({ birthDate, targetDate }) {
    const biorythms = calculateBiorythms(birthDate, targetDate);
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <BiorythmChart/>
                <p>Physical: {biorythms.physical.toFixed(4)}</p>
                <p>Emotional: {biorythms.emotional.toFixed(4)}</p>
                <p>Intellectual: {biorythms.intellectual.toFixed(4)}</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorythmCard;